// DEPENDENCIES
const express = require('express');

// ROUTER

const logs = express.Router();

// MODELS

const logsArray = require("../models/logs");

// ROUTES

logs.get(`/`, (req.res) => {
    res.json(logsArray);
});

logs.get(`*`, (req, res) => {
    res.status(404).json({error: "Page not found."});
});

// EXPORTS

module.exports = logs;