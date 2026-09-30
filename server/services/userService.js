const User = require("../models/userModel");
const bcrypt = require("bcrypt")

const registerUser = async (userData) => {
    const {name, email, password, phone} = userData

    const existingUser = await User.findOne({email});

    if(existingUser){
        return null;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        passwordHash,
        phone
    });
  
    return user;

};

const getAllUsers = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;

    const users = await User.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

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

const blockUser = async (userId) => {
    const user = await User.findByIdAndUpdate(
        userId,
        {accountStatus:"blocked"},
        {new: true}

    );
    return user;
}


const unblockUser = async (userId) => {
     const user = await User.findByIdAndUpdate(
        userId,
        {accountStatus:"active"},
        {new: true}
     );
     return user;
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