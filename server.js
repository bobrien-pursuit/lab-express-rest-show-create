// DEPENDENCIES
const app = require('./app');

// CONFIGURATION

require('dotenv').config();
const PORT = process.env.PORT;

// LISTEN on PORT 2001
app.listen( PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})