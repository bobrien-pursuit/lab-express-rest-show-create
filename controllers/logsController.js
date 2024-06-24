// DEPENDENCIES

const express = require('express');

// ROUTERS

const logs = express.Router();

// MODELS

const logArray = require("../models/log");


// ROUTES
// Index: localhost:2001/logs/
logs.get(`/`, (req, res) => {
    res.json(logArray);
});

// SHOW

logs.get(`/:arrayIndex`, (req, res) => {
    const { arrayIndex } = req.params;

    logArray[arrayIndex] ?
    res.json(logArray[arrayIndex]) :
    res.status(405).redirect(`http://localhost:2001/*`)

})

// POST

logs.post(`/`, (req, res) => {
    logArray.push(req.body);
    res.json(logArray[logArray.length - 1]);
})

logs.get(`*`, (req, res) => {
    res.status(405).redirect(`http://localhost:2001/*`);
});

// EXPORTS

module.exports = logs;