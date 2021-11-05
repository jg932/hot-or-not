import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
  review: String,
})

const hotSauceSchema = new mongoose.Schema({
  name: String,
  review: {reviewSchema},
  rating: Number,
  spiciness: String,
  purchaseLink: String,
  // owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Hotsauce = mongoose.model('Hotsauce', hotSauceSchema)

export {
  Hotsauce,
}