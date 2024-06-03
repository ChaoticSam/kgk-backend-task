const itemService = require('../services/itemService');

exports.getAllItems = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const items = await itemService.getAllItems(page, limit);
        res.json(items);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        await itemService.deleteItem(req.params.id);
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
