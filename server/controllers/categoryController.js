const categoryService = require("../services/categoryService");


const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();

        if (categories.length === 0) {
            return res.status(404).json({
                message: "No categories found"
            });
        }

        return res.status(200).json({
            message: "Categories retrieved successfully",
            data: {
                categories
            }
        });

    } catch (error) {
        console.error("Get all categories error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};



const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);

        return res.status(201).json({
            message: "Category created successfully",
            data: {
                category
            }
        });

    } catch (error) {
        console.error("Create category error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};



const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(
            req.params.id
        );

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        return res.status(200).json({
            message: "Category retrieved successfully",
            data: {
                category
            }
        });

    } catch (error) {
        console.error("Get category by ID error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

const updateCategory = async (req,res) => {
    try{

        const category = await categoryService.updateCategory(
            req.params.id,
            req.body
        );

        if(!category){
            return res.status(404).json({
                message:"Category  not found"
            });
        }

        return res.status(200).json({
            message:"Category Updated Successfully",
            data:{
                category
            }
        })
    } catch(error){
        console.error("Update category error:",error)

        if(error.code === 11000){
            return res.status(409).json({
                message:"Category with this slug is already exists"
            });
        }

        if (error.name === "ValidationError") {
    return res.status(400).json({
        message: "Invalid category data",
        errors: Object.values(error.errors || {}).map(
            (err) => err.message
        )
    });
  }

        if(error.name === "CastError"){
           return res.status(400).json({
                message:"Invalid category ID"
            })
        }

        return res.status(500).json({
            message:"Internal Server error"
        });
    }
};

const deleteCategory = async(req,res) => {
    try{
        const category = await categoryService.deleteCategory(req.params.categoryId );
        if(!category){
            return res.status(404).json({
                message:"Category not found"
            });
        }
        return res.status(200).json({
            message:"Category Data deleted successfully",
            data:{
                category
            }
        })

            

    } catch(error){
        console.error("Delete Category error:",error);

        if(error.name === "CasteError"){
            return res.status(400).json({
                message:"Invalid Category Id"
            })
        }
        return res.status(500).json({
            message:"Internal Server error"
        });
    }
}

    


module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
    
};
