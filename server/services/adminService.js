const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginAdmin = async (email, password) => {
    const admin = await Admin.findOne({ email });

    if (!admin) {
        return null;
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        admin.password
    );

    if (!isPasswordValid) {
    return null;
}

const token = jwt.sign(
    {
        id: admin._id,
        email: admin.email
    },
    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d"
    }
);

return {
    admin,
    token
};

};

module.exports = {
    loginAdmin
};