require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then((res) => console.log("Connected to MongoDB "+ res.connect.host))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
