const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Person
let Person = new Schema({
    person_name: {
        type: String
    },
    person_email: {
        type: String
    },
    person_number: {
        type: Number
    },
    person_start:{
        type: Date
    },
    person_end:{
        type: Date
    },
    person_created:{
        type: Date
    },
    person_active:{
        type: Boolean
    }
},{
    collection: 'person'
});

module.exports = mongoose.model('Person', Person);