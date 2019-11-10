const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const personRoute = require('./person.route');

let mongolaburi =
    process.env.MONGOLAB_URI ||
    config.DB;

mongoose.Promise = global.Promise;
mongoose.connect(mongolaburi, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/person', personRoute);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});