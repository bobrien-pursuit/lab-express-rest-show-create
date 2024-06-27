// DEPENDENCIES

const express = require('express');
const checkForKeys = require("../validations/logValidations");

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

// DELETE

logs.delete(`/:arrayIndex`, (req, res) => {
    let { arrayIndex } = req.params;

    if(logArray[arrayIndex]) {
        logArray.splice(arrayIndex, 1);
        res.json({ error: "Log Successfully Deleted."});
    }
    else
        res.status(404).json( {error: "Not Found"});
})

// UPDATE

logs.put(`/:arrayIndex`, (req, res) => {
    let { arrayIndex } = req.params;

    logArray[arrayIndex] = req.body;
    res.status(200).json(logArray[arrayIndex]);
})

logs.get(`*`, (req, res) => {
    res.status(405).redirect(`http://localhost:2001/*`);
});

// EXPORTS

module.exports = logs;