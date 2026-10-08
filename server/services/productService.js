const Product = require("../models/productModel");


const createProduct = async (productData) => {
    const product = await Product.create(productData);

    return product;
};

const getAllProducts = async (query) => {
    const {
        search,
        page = 1,
        limit = 10,
        sort,
        category,
        minPrice,
        maxPrice,
    } = query;

    const filter = {
        isDeleted: false,
        isBlocked: false,
    };

    
    if (search) {
        filter.name = {
            $regex: search,
            $options: "i",
        };
    }

    
    if (category) {
        filter.category = category;
    }

   
    if (minPrice || maxPrice) {
        filter.price = {};

        if (minPrice) {
            filter.price.$gte = Number(minPrice);
        }

        if (maxPrice) {
            filter.price.$lte = Number(maxPrice);
        }
    }

    
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    
    let sortOption = {};

    if (sort === "price_asc") {
        sortOption.price = 1;
    } else if (sort === "price_desc") {
        sortOption.price = -1;
    } else if (sort === "name_asc") {
        sortOption.name = 1;
    } else if (sort === "name_desc") {
        sortOption.name = -1;
    }

    const products = await Product.find(filter)
        .populate("category", "name")
        .sort(sortOption)
        .skip(skip)
        .limit(limitNumber);

    const totalProducts = await Product.countDocuments(filter);

    return {
        products,
        totalProducts,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalProducts / limitNumber),
    };
};


const getProductById = async (productId) => {
    const product = await Product.findOne({
        _id: productId,
        isDeleted: false,
    }).populate("category", "name");

    return product;
};


const updateProduct = async (productId, productData) => {
    const product = await Product.findOneAndUpdate(
        {
            _id: productId,
            isDeleted: false,
        },
        productData,
        {
            new: true,
            runValidators: true,
        }
    ).populate("category", "name");

    return product;
};


const deleteProduct = async (productId) => {
    const product = await Product.findOneAndUpdate(
        {
            _id: productId,
            isDeleted: false,
        },
        {
            isDeleted: true,
        },
        {
            new: true,
        }
    );

    return product;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};