import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);

// {
//   "title":"single room le meridien",
//   "price":150,
//   "maxPeople":2,
//   "desc":"2 beds for 2 people",
//   "roomNumbers": [{"number:101"},{"number":102},{"number":103},{"number":104}]
// }