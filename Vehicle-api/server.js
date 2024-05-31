const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

// Bring in the routes
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Async function to connect to the database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1); // Exit the process with an error code
  }
}

// Call the async function to connect to the database
connectToDatabase();

// Add middleware
app.use(cors());
app.use(express.json());

// we have to define the route
app.get('/', (req, res) => {
  res.send('Welcome to the Vehicle API!');
});

// Associate the vehicleRoutes with the /api endpoint
app.use("/api", vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
