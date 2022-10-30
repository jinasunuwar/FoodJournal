const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodJournal = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String
}, {timestamps : true} );

module.exports = mongoose.model('FoodEntries', foodJournal);