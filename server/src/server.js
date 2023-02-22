const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// Async function to start server.
// Function awaits for loadPlanetsData (from planets model) function to be completed and start server listening on some port
async function startServer(){
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

// Calling previous function
startServer();