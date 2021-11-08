import mongoose from "mongoose"

const Schema = mongoose.Schema

const hotsauceSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})
  
  
  
//   review: String,
//   rating: {
//     type: Number,
//     enum: ["1", "2", "3", "4", "5"],
//   },
//   spiciness: {
//     type: String,
//     enum: ["Mild", "Medium", "Hot", "Spicy", "Spice Spice", "Extreme", "☠️",]
//   },
//   purchaseInfo: String,
//   owner: {type: Schema.Types.ObjectId, ref: "Profile"}
// },
// {
//   timestamps: true,
// })

const Hotsauce = mongoose.model('Hotsauce', hotsauceSchema)

export {
  Hotsauce,
}


