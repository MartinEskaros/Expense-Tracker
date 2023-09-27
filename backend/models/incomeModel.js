//Import mongoose module to work with MongoDB
const mongoose = require('mongoose');

//Define schema for Income data in MongoDB
const IncomeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount:{
        type: Number,
        required:true,
        maxLength:20,
        trim: true
    },
    type:{
        type: String,
        default: "Income"
    },
    date:{
        type: Date,
        required: true,
        trim:true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true

    },
}, {timestamps:true})       //automatically manages createdAt and updatedAt timestamps


// Export Income model based on the IncomSchema to be used in other parts of the application
module.exports = mongoose.model('Income', IncomeSchema)