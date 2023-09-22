const router = require('express').Router()  //Seting up the router


router.get('/transactions', (req,res) => {
    res.send('Hello World')
})

module.exports = router;