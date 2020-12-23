const mongoose = require('mongoose')


const CardListScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please write a name'],
        unique: true,
        maxlength: [10,"Name can not be more than 10 characters"]
    },
    description: {
        type: String,
        required: true,
        maxlength: [20,'Description can not be more than 20 characters']
    },
    inStock: {
        type: String,
        required: true,
        maxlength: 999
    },
    category: {
        type: String,
        required: true,
        maxlength: 15
    }
});

module.exports = mongoose.models.Card || mongoose.model('Card' , CardListScheme)