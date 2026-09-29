const User = require("../models/userModel");

const getAllUsers = async () => {
    const users = await User.find();

    return users;
};

const getUserById = async (userId) => {
    const user = await User.findById(userId);

    return user;
};

const updateUser = async (userId , updateData) => {
    const user = await User.findByIdAndUpdate(
       userId,
       updateData,
       {
         new : true,
         runValidators:true
       }
    );

    return user;
}

const deleteUser = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    
    return user;
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};