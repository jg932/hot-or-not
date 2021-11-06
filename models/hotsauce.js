import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  review: String,
})

const hotSauceSchema = new Schema({
  name: String,
  review: {reviewSchema},
  rating: {
    type: Number,
    enum: ["1", "2", "3", "4", "5"],
  },
  spiciness: {
    type: String,
    enum: ["Mild", "Medium", "Hot", "Spicy", "Spice Spice", "Extreme", "☠️",]
  },
  purchaseLink: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
},
{
  timestamps: true,
})

const Hotsauce = mongoose.model('Hotsauce', hotSauceSchema)

export {
  Hotsauce,
}


