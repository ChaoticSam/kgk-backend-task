const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, getNotifications);
router.post('/mark-read', auth, markAsRead);

module.exports = router;
