const express = require('express');
const { getBidsByItemId, placeBid } = require('../controllers/bidController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/:itemId/bids', getBidsByItemId);
router.post('/:itemId/bids', auth, placeBid);

module.exports = router;
