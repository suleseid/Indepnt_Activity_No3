//We have to create a models
//models is just a javasript blueprint for an entry in a database
const mongoose = require('mongoose');

//we define the schema
//Object where we define all of the properties for vehicles
const vehicleSchema = new mongoose.Schema({
  //Insides of this object we need to define the properties for the vehicles or user
  //vehicles has a make, model, year, color, and price
  // Those(make, model, year, color and price) all are Json syntacs
  make: {
     type: String, 
     required: true, 
    },
  model: { 
    type: String, 
    required: true, 
   },
  year: { 
    type: Number, 
    required: true, 
  },
  color: { 
    type: String, 
    required: true, 
  },
  price: { 
    type: Number, 
    required: true, 
  }
});
//Creating a models from the schema and 
const Vehicle = mongoose.model('Vehicle', vehicleSchema);
//we are exporting
module.exports = Vehicle;

