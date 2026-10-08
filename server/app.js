
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test route
app.get("/", (req, res) => {
    res.send("Scoopify server is running...");
});


app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/admin", adminRoutes);
app.use("/admin/users", userRoutes);
module.exports = app;