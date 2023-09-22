
//Import mongoose
const mongoose = require('mongoose');

//Establish connection to MongoDB database
const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);   //waits for promise of Successful/Unsuccesful Connection 
        console.log('Db Connected');
    } catch (error) {
        console.log('DB Connection Error');     //If unsuccesful
    }
}

module.exports = {db} ;  //export db function to import it later