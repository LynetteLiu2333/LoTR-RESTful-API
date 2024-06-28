// server.js
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const characterRoutes = require("./routes/characterRoutes");
const userRoutes = require("./routes/userRoutes");
const { protect } = require("./middleware/authMiddleware");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/characters", protect, characterRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
  
module.exports = app;