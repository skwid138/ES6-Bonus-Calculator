// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// port
const port = process.env.PORT;

// set public folder
app.use(express.static('server/public'));

// module use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// listening
app.listen(port, function () {
    console.log('listening on port', port);
}); // end listen