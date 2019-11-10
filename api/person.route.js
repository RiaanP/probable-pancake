const express = require('express');
const personRoutes = express.Router();

// Require Person model in our routes module
let Person = require('./person.model');

// Defined store route
personRoutes.route('/add').post(function (req, res) {
    let person = new Person(req.body);
    person.save()
        .then(person => {
            res.status(200).json({'person': 'person in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
personRoutes.route('/').get(function (req, res) {
    Person.find(function(err, businesses){
        if(err){
            console.log(err);
        }
        else {
            res.json(businesses);
        }
    });
});


module.exports = personRoutes;