const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
    },
    type:{
        type:String,
        default: "Expense"
    },
    date:{
        type:Date,
        required:true,

    },
    category:{
        type:String,
        required:true,
        trime: true
    },
    description:{
        type: String,
        required:true,
        maxLength:60,
        trim:true
    },

}, {timestamps:true}
)

module.exports = mongoose.model('Expense', ExpenseSchema);