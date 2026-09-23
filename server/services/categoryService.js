const Category = require("../models/categoryModel");

const getAllCategories = async () => {
    const categories = await Category.find().sort({ createdAt: -1 });

    return categories;
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
    const category = await Category.findByIdAndDelete(categoryId);

    return category;
}

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