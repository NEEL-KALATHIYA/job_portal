const mongoose = require('mongoose');
require("dotenv").config();


const connectDb=async()=>{
   try {
     await mongoose.connect("mongodb+srv://kalathiyaneel4:TqMeOHarIFdmpAVU@cluster0.o0zgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test")
     console.log("Connect to database ");
   } catch (error) {
    console.log(error.message)
   }
    
}
module.exports = connectDb