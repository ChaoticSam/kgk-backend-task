const Notification = require('../models/notification');

exports.getNotifications = async (userId) => {
    return await Notification.findAll({ where: { user_id: userId } });
};

exports.markAsRead = async (userId, notificationIds) => {
    await Notification.update({ is_read: true }, { where: { id: notificationIds, user_id: userId } });
};
