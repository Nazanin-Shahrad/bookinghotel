import express from "express";
import { createHotel, deleteHotel, updateHotel ,getHotel , getHotels , countByCity , countByType } from "../controllers/hotelControllers.js";
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
router.get("/find/:id" , getHotel)


//GET ALL
router.get("/" , getHotels)

router.get("/countByCity" , countByCity)

router.get("/countByType" , countByType);

export default router;