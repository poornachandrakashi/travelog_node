const mongoose = require('mongoose');

const URI = 
'mongodb+srv://dbUser:poorna@cluster0.7mpqi.mongodb.net/data?retryWrites=true&w=majority';


const connectDB = async () =>{
    await mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});
    console.log("Database has been connected")
}



module.exports = connectDB;
