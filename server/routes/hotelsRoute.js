import express from "express";
import { createHotel, deleteHotel, updateHotel ,getHotel , getHotels} from "../controllers/hotelControllers.js";
const router = express.Router();
import Hotel from "../models/HotelModel.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//CREATE
router.post("/" ,verifyAdmin, createHotel)

//UPDATE
router.put("/:id" ,verifyAdmin, updateHotel)

//DELETE
router.delete("/:id" , verifyAdmin, deleteHotel)

//GET
router.get("/:id" , getHotel)


//GET ALL
router.get("/" , getHotels)


export default router;