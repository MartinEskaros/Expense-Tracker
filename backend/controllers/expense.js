
// Import expense model
const Expense = require('../models/expenseModel');

exports.addExpense = async (req,res) =>{

        const {title,amount,date,category,description} = req.body

        const expense = Expense({
                title,
                amount,
                date,
                category,
                description
        })

        try {
                if(!title || !amount || !date || !category || !description){
                        return res.status(400).json({message:'All fields are required'})
                }

                if(!amount === 'number' || amount <=0){
                        return res.status(400).json({message: 'Amount must be a positive number'})
                }
                await expense.save()
                res.status(200).json({message:'Expense Added'})
                
        } catch (error) {
                res.status(500).json({message:'Servor Error'})
        }
        console.log(expense);
}

exports.getExpenses = async (req,res) => {
        try {
        const expenses = await Expense.find().sort({createdAt:-1});
        res.status(200).json(expenses)
                
        } catch (error) {
        res.status(500).json({message:'Servor Error'})
        }
}

exports.deleteExpense = async (req,res) => {
        const {id} = req.params;
        Expense.findByIdAndDelete(id)
        .then ((expense) =>{
                res.status(200).json({message:'Expense Deleted'})
        })
        .catch ((err) =>{
                res.status(500).json({message:'Server Error'})
        })
}