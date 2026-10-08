const productService = require("../services/productService");


const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json({
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create product",
            error: error.message,
        });
    }
};


const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);

        if (products.length === 0) {
            return res.status(404).json({
                message: "No products found",
            });
        }

        res.status(200).json({
            message: "Products retrieved successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve products",
            error: error.message,
        });
    }
};


const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.status(200).json({
            message: "Product retrieved successfully",
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid product ID",
            error: error.message,
        });
    }
};


const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(
            req.params.id,
            req.body
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to update product",
            error: error.message,
        });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete product",
            error: error.message,
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};