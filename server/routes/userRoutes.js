const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", userController.registerUser);

router.get("/", authMiddleware, userController.getAllUsers);

router.get("/:userId", authMiddleware, userController.getUserById);

router.put("/:userId", authMiddleware, userController.updateUser);

router.delete("/:userId", authMiddleware, userController.deleteUser);

module.exports = router;