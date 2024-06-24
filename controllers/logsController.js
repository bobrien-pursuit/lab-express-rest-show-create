// DEPENDENCIES

const express = require('express');

// ROUTERS

const log = express.Router();

// MODELS

const logArray = require("../models/logs");


// ROUTES
// localhost:2001/logs/
log.get(`/`, (req, res) => {
    res.json(logArray);
});

log.get(`*`, (req, res) => {
    res.status(404).json({error: "Page not found."});
});

// EXPORTS

module.exports = log;