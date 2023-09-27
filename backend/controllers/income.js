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

