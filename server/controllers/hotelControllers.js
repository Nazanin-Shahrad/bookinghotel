
import Hotel from "../models/HotelModel.js";

export const createHotel = async (req, res,next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch(err){
        // res.status(500).json(err);
        next(err);
    }

}

export const updateHotel =async (req, res,next) => {
    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id , {$set :req.body} ,{new : true});
        res.status(200).json(updatedHotel);

    } catch(err){
       next(err);
    }

}

export const deleteHotel = async (req, res, next) => {
    
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json({"message" : "recode has been deleted"});

    } catch(err){
      next(err);
    }
}

export const getHotel = async (req, res , next) => {
    
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);

    } catch(err){
       next(err);
    }

}


// export const getHotels = async (req, res , next) => { 
//     try {
//         const hotels = await Hotel.find().limit(req.query.limit);
//         res.status(200).json(hotels);

//     } catch(err){
//        next(err);
//     }
// }

//get all record
export const getHotels = async(req , res, next) => {
    // const {featured ,  limit} = req.query;
    try {
       
        const hotels = await Hotel.find(res.query).limit(req.query.limit);
        //     ...others, 
        //     cheapestPrice : {$gte : min | 1 , $lte : max || 999 },
        // }).limit(req.query.limit)
        res.status(200).json(hotels);

    }
    catch(err){
        next(err)
     }
   

}


export const countByCity = async (req, res , next) => {
    const cities = req.query.cities.split(",");
    
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city : city})
        }));
        res.status(200).json(list);

    } catch(err){
       next(err)
    }

}


export const countByType = async ( req, res , next) => {
    try {
        const countHotel = await Hotel.countDocuments({type : "Hotel"});
        const countApartment = await Hotel.countDocuments({type : "apartment"});
        const countVilla = await Hotel.countDocuments({type : "villa"});
        const countResort = await Hotel.countDocuments({type : "resort"});
        const countCabin = await Hotel.countDocuments({type : "cabin"});

        res.status(200).json([
            {type: "hotel " , count: countHotel},
            {type: "apartment " , count: countApartment},
            {type: "villa " , count: countVilla},
            {type: "resort " , count: countResort},
            {type: "cabin " , count: countCabin}
        ])
    }
    catch(err){
        next(err)
    }


}