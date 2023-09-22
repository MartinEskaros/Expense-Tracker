const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const { route } = require('./routes/transactions');
const app = express();


require('dotenv').config()

const PORT = process.env.PORT


//middleWares
app.use(express.json())
app.use(cors()) // CORS middleware provides a way to allow or restrict which domains can access your server's resources.


//routes
const path = require('path');
readdirSync('./routes').map((route) => app.use('/api/v1', require(path.join(__dirname, 'routes', route))))







const server = () => {
    db()    //establish connection to MongoDB database
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}
route

server()