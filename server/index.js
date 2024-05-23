// index.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const authRoutes = require('./routes/auth');
const listingRoutes = require("./routes/Listing");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* Routes */
app.use('/auth', authRoutes);
app.use("/properties", listingRoutes)

/* mongoose connection */
const PORT = 3001;
mongoose.connect(process.env.MONGO_URL, {
  dbName: 'HomeHoppers',
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
