import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connect = async() => {
 try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");

 } catch(err){
    throw error
 }
}
const app = express();

app.listen(4000 ,() => {
    connect();
    console.log("connected to backend.")
})