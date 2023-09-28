//Routes for financial transactions


const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router()  //Seting up the router

//POST route for adding income, calls addIncome function in income.js
router.post('/add-income', addIncome)
        .get('/get-incomes',getIncomes)
        .delete('/delete-income/:id', deleteIncome)








//exporting the router to be used in other parts of the application
module.exports = router;