//express has the router object
const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const router = express.Router();

//here we need to define our router
router.post('/vehicles', vehicleController.createVehicle);
router.get('/vehicles', vehicleController.getAllVehicles);
router.get('/vehicles/:id', vehicleController.getVehicleById);
router.put('/vehicles/:id', vehicleController.updateVehicleById);
router.delete('/vehicles/:id', vehicleController.deleteVehicleById);

//here we export the router
module.exports = router;
