
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
//let router = require('./route')
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api',  require('./route'))

app.listen(3000, function () {
    console.log("Server started successfully at port 3000");
});
