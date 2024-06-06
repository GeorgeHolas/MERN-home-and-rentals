// index.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth");
const listingRoutes = require("./routes/Listing");
const bookingRoutes = require("./routes/booking");
const userRoutes = require("./routes/user");

const allowedOrigins = ['https://your-https://homehoppersrental86-jiri-holas-projects.vercel.app.com', 'http://localhost:3000'];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

/* Routes */
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

/* mongoose connection */
const PORT = 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "HomeHoppers",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
