//Imports the IncomeSchema from the incomeModel file. This is the Mongoose model that 
//represents the structure of an "Income" document in the MongoDB database.

const IncomeSchema = require("../models/incomeModel")


//Method to add income
exports.addIncome = async (req, res) =>{

    //Destructuring request body to extract income related data.
    const {title,amount,category, description,date} = req.body

    //Creating a new income instance using the provided data.
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

  
    try {
        //Check if all required fields are provided
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required'})
        }
        //Check if amount is valid
        if(amount<= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number'})
        }
        //Save income instance to the database
        await income.save()
        //Send success response
        res.status(200).json({message: 'Income Added'})
        
    } catch (error) {
        res.status(500).json({message: 'Servor Error'})
    }

    console.log(income)
}

//method to get income documents

exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req,res) => {
    const {id} = req.params;    
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })    
        .catch((err)=>{
            res.status(500).json({message: 'Server Error'})
        })
}