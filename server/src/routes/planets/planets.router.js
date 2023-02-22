// Require express package which is installed
const express = require('express');

// Requiring only httpGetAllPlanets function from planets.controller
const {
    httpGetAllPlanets,
} = require('./planets.controller');

// Creating router planetsRouter using express
const planetsRouter = express.Router();

// Setting router to call function
planetsRouter.get('/', httpGetAllPlanets);

// Exporting planetsRouter
module.exports = planetsRouter;