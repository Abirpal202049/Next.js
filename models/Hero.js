const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    superhero : {
        type : String,
        required : [true, 'Please name the hero'],
        unique : true,
        trim : true
    },
    realname : {
        type : String,
        required : true,
        maxlength : [200, 'Please keep real name short']
    }
})

//? If model is already created it will take that otherwise it will create a new model
module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema)