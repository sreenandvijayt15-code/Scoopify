
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const categoryRoutes = require("./routes/categoryRoutes");

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

// Category routes
app.use("/api/categories", categoryRoutes);
module.exports = app;