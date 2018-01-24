module.exports = function(app) {

    var vehicle = require('../controllers/vehicle.controller.js');

    // Create a new Vehicle
    app.post('/vehicle',  vehicle.create );

    // Retrieve all vehicle
    app.get('/vehicle', vehicle.findAll);

    //Retrieve all vehicles by CompanyId
    app.get('/vehicle/company/:id', vehicle.findByCompanyId);
    //Retrieve all vehicles by CompanyId
    app.get('/vehicle/fleet/:id', vehicle.findByFleetId);

    // // Retrieve a single vehicle with vehicleId
    // app.get('/notes/:noteId', vehicle.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/vehicle/:id', vehicle.delete);
}





