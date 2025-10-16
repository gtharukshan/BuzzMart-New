const ProductModel = require('../models/productModel');
const mongoose = require('mongoose');

// Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    try {
        let query = {};

        if (req.query.keyword) {
            // Sanitize user input to prevent NoSQL Injection
            const keyword = req.query.keyword.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            query = { name: { $regex: keyword, $options: 'i' } };
        }

        const products = await ProductModel.find(query);

        res.json({
            success: true,
            products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Get Single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ success: false, message: 'Invalid Product ID' });
        }

        const product = await ProductModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.json({
            success: true,
            product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
