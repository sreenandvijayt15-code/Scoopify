const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", adminController.loginAdmin);

router.get("/profile", authMiddleware, (req, res) => {
    return res.status(200).json({
        message: "Admin profile accessed successfully",
        admin: req.admin
    });
});


module.exports = router;