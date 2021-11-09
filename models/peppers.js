import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pepperSchema = new Schema({
  pepper: {
    name: String,
    type: String,
  }
}, {timestamps: true})

const Pepper = mongoose.model("Pepper", pepperSchema)

export {
  Pepper,
}