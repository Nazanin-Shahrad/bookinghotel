import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute  from './routes/authRoute.js';
import hotelsRoute from './routes/hotelsRoute.js';
import roomsRoute from './routes/roomsRoute.js';
import usersRoute from './routes/usersRoute.js'
const app = express();
dotenv.config();

const connect = async() => {
 try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");

 } catch(err){
    throw error
 }
}



//middleware
app.use(express.json());

app.use('/api/auth' , authRoute)
app.use('/api/hotels' , hotelsRoute)
app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)

app.listen(4000 ,() => {
    connect();
    console.log("connected to backend.")
})