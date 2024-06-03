const Bid = require('../models/bid');
const Item = require('../models/item');
const Notification = require('../models/notification');

exports.getBidsByItemId = async (itemId) => {
    return await Bid.findAll({ where: { item_id: itemId } });
};

exports.placeBid = async (itemId, userId, bidAmount) => {
    const item = await Item.findByPk(itemId);
    if (!item) throw new Error('Item not found');
    if (bidAmount <= item.current_price) throw new Error('Bid must be higher than current price');

    const bid = await Bid.create({ item_id: itemId, user_id: userId, bid_amount: bidAmount });
    await item.update({ current_price: bidAmount });

    // Notify the item owner of the new bid
    await Notification.create({
        user_id: item.owner_id,
        message: `A new bid of ${bidAmount} has been placed on your item "${item.name}".`
    });

    return bid;
};
