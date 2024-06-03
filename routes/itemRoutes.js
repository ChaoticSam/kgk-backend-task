const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/itemController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', auth, createItem);
router.put('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);

module.exports = router;
