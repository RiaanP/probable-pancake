const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const personRoute = require('./person.route');
const path = require('path');

let mongolaburi =
    process.env.MONGOLAB_URI ||
    config.DB;

mongoose.Promise = global.Promise;
mongoose.connect(mongolaburi, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(express.static(path.join(__dirname, './build')));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/person', personRoute);

const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('Server is running on Port:',port);
});