import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  reviewersName: String,
  reviewersPreference: {
    type: String,
    enum: ["Mild", "Medium", "Hot", "Spicy", "Spice Spice", "Extreme", "☠️",],
  },
  review: String,
  rating: {
    type: Number,
    enum: ["1", "2", "3", "4", "5"],
  },
  spiciness: {
    type: String,
    enum: ["Mild", "Medium", "Hot", "Spicy", "Spice Spice", "Extreme", "☠️",]
  },
  purchaseInfo: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {timestamp: true,
})

const hotsauceSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema]
}, {timestamp: true
})
  
const Hotsauce = mongoose.model('Hotsauce', hotsauceSchema)

export {
  Hotsauce,
}


