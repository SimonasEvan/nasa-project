// Requiring only getAllPlanets function from planets.model
const { getAllPlanets } = require('../../models/planets.model');

// Creating function which return status 200, with all planets data in json using getAllPlanets function
async function httpGetAllPlanets(req, res) {
    return res.status(200).json(await getAllPlanets());
}

// Exporting function
module.exports = {
    httpGetAllPlanets,
}