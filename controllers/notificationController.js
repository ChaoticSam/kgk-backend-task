const notificationService = require('../services/notificationService');

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await notificationService.getNotifications(req.user.id);
        res.json(notifications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.markAsRead = async (req, res) => {
    try {
        const { notificationIds } = req.body;
        await notificationService.markAsRead(req.user.id, notificationIds);
        res.json({ message: 'Notifications marked as read' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
