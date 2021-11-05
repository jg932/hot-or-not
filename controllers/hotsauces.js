import  { Hotsauce } from "../models/hotsauce.js"

function index(req, res) {
  Hotsauce.find({})
  .then(hotsauces => {
    res.render("hotsauces/index", {
      title: "🌶️",
      hotsauces,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect("/hotsauces")
  })
}

export {
  index,
}