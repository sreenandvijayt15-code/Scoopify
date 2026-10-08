const Category = require("../models/categoryModel");

const getAllCategories = async (search = "", page = 1, limit = 10) => {
    const skip = (page - 1) * limit;

    const query = {
        $or: [
            { isDeleted: false },
            { isDeleted: { $exists: false } }
        ]
    };

    if (search) {
        query.name = {
            $regex: search,
            $options: "i"
        };
    }

    const categories = await Category.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

    const totalCategories = await Category.countDocuments(query);

    return {
        categories,
        totalCategories,
        currentPage: page,
        totalPages: Math.ceil(totalCategories / limit)
    };
};

const createCategory = async (categoryData) => {
    const category = await Category.create(categoryData);
    
    return category;
};

const getCategoryById = async (categoryId) => {
     const category = await Category.findById(categoryId);

     return category;
}

const deleteCategory = async (categoryId) => {
    const category = await Category.findByIdAndUpdate(
        categoryId,
        { isDeleted: true },
        { new: true }
    );

    return category;
};

const updateCategory = async (categoryId, categoryData) => {
     const category = await Category.findByIdAndUpdate(
        categoryId,
        categoryData,
        {
            new:true,
            runValidators:true

        }
     );
     return category;

}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};