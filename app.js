// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController");

// insatnce of app
const app = express();

// MIDDLEWARE

app.use(express.jsaon());
app.use(`/logs`, logsController)

// ROUTES

// Home Route
app.get(`/`, (req, res) => {
    res.send(`Captain's Log`);
});

// EXPORTS

module.exports = app;