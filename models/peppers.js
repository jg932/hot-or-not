import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pepperSchema = new Schema({
    pepper: String,
    scovilleRating: Number,
}, {timestamps: true})

const Pepper = mongoose.model("Pepper", pepperSchema)

export {
  Pepper,
}