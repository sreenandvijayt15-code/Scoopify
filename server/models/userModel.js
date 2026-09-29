const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },

        passwordHash: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            trim: true
        },

        profileImage: {
            type: String
        },

        role: {
            type: String,
            enum: ["customer"],
            default: "customer"
        },

        accountStatus: {
            type: String,
            enum: ["active", "blocked"],
            default: "active"
        },

        isEmailVerified: {
            type: Boolean,
            default: false
        },

        rewardPointsBalance: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;