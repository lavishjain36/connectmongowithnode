const express=require("express");
const mongoose=require("mongoose")
const app=express();


const uri="mongodb+srv://jainmonula:YuABUkhlS0AFcQMg@cluster0.mezay9d.mongodb.net/?retryWrites=true&w=majority";

//Write a code to connect with mongodb database 
async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to Mongodb Database")
    } catch (error) {
        console.log(error)
    }
  
}

connect();


app.listen(4000,()=>{
    console.log("Server Started at port 4000")
})