const User = require("../models/userModel");
const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
    try {
        const { page, limit } = req.query;

        if (page !== undefined && (isNaN(page) || Number(page) < 1)) {
            return res.status(400).json({
                message: "Page must be a positive number"
            });
        }

        if (limit !== undefined && (isNaN(limit) || Number(limit) < 1)) {
            return res.status(400).json({
                message: "Limit must be a positive number"
            });
        }

        const users = await userService.getAllUsers();

        return res.status(200).json({
            message: "Users fetched successfully",
            data: users
        });

    } catch (error) {
        console.error("Get all users error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await userService.getUserById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User fetched successfully",
            data: user
        });

    } catch (error) {
        console.error("Get user by ID error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

const updateUser = async (req,res) => {
    try{

        const {userId} = req.params;
        const updateData = req.body;

        const user = await userService.updateUser(
            userId,
            updateData
        );

        if(!user){
            return res.status(404).json({
                message:"user not found "
            });
        }
        
        return res.status(200).json({
            message:"user update successfully",
            data:user
        })
    } catch(error){
        console.error("Update user error:",error)

        return res.status(500).json({
            message:"internal server error"
        });
    }
}

const deleteUser = async (req,res) => {
    try{

        const {userId} = req.params;

        const user = await userService.deleteUser(userId);

        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }

        return res.status(200).json({
            message:"User delete successfully",
            data: user
        })
    }catch(error){
        console.error("User delete error:",error)

        return res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};