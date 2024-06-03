const Item = require('../models/item');
const Notification = require('../models/notification');

exports.getAllItems = async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    return await Item.findAndCountAll({ limit, offset });
};

exports.getItemById = async (id) => {
    return await Item.findByPk(id);
};

exports.createItem = async (itemData) => {
    const item = await Item.create(itemData);

    // Notify admin or relevant users
    // Assuming there's a way to get admin users, this is an example:
    const adminUsers = await User.findAll({ where: { role: 'admin' } });
    for (const admin of adminUsers) {
        await Notification.create({
            user_id: admin.id,
            message: `A new item "${item.name}" has been created.`
        });
    }

    return item;
};

exports.updateItem = async (id, itemData) => {
    const item = await Item.findByPk(id);
    if (!item) throw new Error('Item not found');
    await item.update(itemData);

    // Notify watchers of the item
    const bids = await Bid.findAll({ where: { item_id: id } });
    for (const bid of bids) {
        await Notification.create({
            user_id: bid.user_id,
            message: `The item "${item.name}" has been updated.`
        });
    }

    return item;
};

exports.deleteItem = async (id) => {
    const item = await Item.findByPk(id);
    if (!item) throw new Error('Item not found');
    await item.destroy();

    // Notify watchers of the item
    const bids = await Bid.findAll({ where: { item_id: id } });
    for (const bid of bids) {
        await Notification.create({
            user_id: bid.user_id,
            message: `The item "${item.name}" has been deleted.`
        });
    }
};
