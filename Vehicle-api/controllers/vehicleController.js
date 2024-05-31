//The controller users(vehile) the model and reports to users input
// so our user input in a web api is http requests
const Vehicle = require('../models/Vehicle');

//here is the place where we define all of the operations that we want 
//to performs on the user collection(vehicle collection)

//POST/Vehicle
//this post request pass data in the body of the request
const createVehicle = async (req, res) => {
  //The info we want is in the body
  const vehicle= new Vehicle({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    price: req.body.price,

  }); 
  //const { make, model, year, color, price } = req.body;
  try {
    //any time we talk to database we use the models
    //const vehicle = new Vehicle({ make, model, year, color, price });
    const newVehicle = await vehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the vehicle' });
  }
};
//Get/vehicle
const getAllVehicles = async (req, res) => {
  try {
    //this (user)vehicles.find() it return a promise
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving vehicles' });
  }
};

//Get/vehicle/:id
const getVehicleById = async (req, res) => {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) res.status(404).json({ error: 'Vehicle not found' });
    else res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the vehicle' });
  }
};

//PUT /vehicle/:id
//This data comes in the body and the params
const updateVehicleById = async (req, res) => {
  const vehicleInfo = req.body;

  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, vehicleInfo, { new: true });
    if (!updatedVehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(updatedVehicle);
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'An error occurred while updating the vehicle' });
  }
};


const deleteVehicleById = async (req, res) => {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    if (!vehicle) res.status(404).json({ error: 'Vehicle not found' });
    else res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the vehicle' });
  }
};

module.exports = {createVehicle, getAllVehicles, getVehicleById, updateVehicleById, deleteVehicleById };
