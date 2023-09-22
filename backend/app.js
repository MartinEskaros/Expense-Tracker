const express = require('express');
const cors = require('cors');

const app = express();


require('dotenv').config()

const PORT = process.env.PORT


//middleWares
app.use(express.json())
app.use(cors()) // CORS middleware provides a way to allow or restrict which domains can access your server's resources.



app.get('/', (req,res) => {
    res.send('Hello World');
})


const server = () => {
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()