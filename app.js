// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController");
const cors = require('cors');

// insatnce of app
const app = express();

// MIDDLEWARE
// using cors to add headers to requests
app.use(cors());

app.use(express.json());
// localhost:2001/logs
app.use(`/logs`, logsController);


// ROUTES

// Home Route
app.get(`/`, (req, res) => {
    res.send(`Captain's Log`);
});

app.get(`*`, (reg, res) => {
    res.status(404).json({error: `Page not found.`});
})

// EXPORTS

module.exports = app;