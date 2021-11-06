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

function newHotsauce(req, res) {
  res.render('hotsauces/new', {
    title: "Add Hot Sauce"
  })
}

function create(res,req) {
  req.body.owner = req.user.profile._id
  Hotsauce.create(req.body)
  .then(hotsauce => {
    res.redirect('/index')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/index')
  })
}

export {
  index,
  create,
  newHotsauce as new,
}