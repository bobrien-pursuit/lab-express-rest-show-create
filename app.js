// DEPENDENCIES

const express = require("express");


// insatnce of app
const app = express();
// tells instance of app to use json format
app.use(express.jsaon());

// ROUTES

// Home Route
app.get(`/`, (req, res) => {
    res.send(`Captain's Log`);
});

// EXPORTS

module.exports = app;