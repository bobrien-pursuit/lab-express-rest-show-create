// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController");

// insatnce of app
const app = express();

// MIDDLEWARE

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