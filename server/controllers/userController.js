const User = require("../models/userModel");
const userService = require("../services/userService");


const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required"
            });
        }

        const user = await userService.registerUser({
            name,
            email,
            password,
            phone
        });

        if (!user) {
            return res.status(409).json({
                message: "User with this email already exists"
            });
        }

        return res.status(201).json({
            message: "User registered successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.error("Register user error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


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

        const users = await userService.getAllUsers(
           Number(page) || 1,
           Number(limit) || 10
         );

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
                message:"User not found "
            });
        }
        
        return res.status(200).json({
            message:"User updated successfully",
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
                message:"User not found"
            })
        }

        return res.status(200).json({
            message:"User deleted successfully",
            data: user
        })
    }catch(error){
        console.error("User delete error:",error)

        return res.status(500).json({
            message:"internal server error"
        })
    }
}

const blockUser = async (req,res) => {
    try{

        const {userId} = req.params;

        const user = await userService.blockUser(userId);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }

        return res.status(200).json({
            message:"User blocked successfully",
            data:user
        });
    }catch(error){
        console.error("block user error:",error);

        return res.status(500).json({
            message:"Internal server error"
        });
    }
}

const unblockUser = async (req,res) => {
    try{

        const {userId} = req.params;

        const user = await userService.unblockUser(userId);
        
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }

        return res.status(200).json({
            message:"User unblocked successfully",
            data:user
        });
    }catch(error){
        console.error("Unblock user error:",error);

        return res.status(500).json({
            message:"Internal server error"
        });
    }
}

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    blockUser,
    unblockUser
};