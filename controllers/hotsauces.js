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
    // console.log(error)
    res.render("hotsauces")
  })
}

// function newHotsauce(req, res) {
//   res.render('hotsauces/new', {
//     title: "Add Hot Sauce"
//   })
// }

function create(req,res) {
  console.log(req.body)
  req.body.owner = req.user.profile._id
  Hotsauce.create(req.body)
  .then(hotsauce => {
    res.redirect('/hotsauces')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/hotsauces')
  })
}

// function create(res,req) {
//   console.log("This is my hotsuace", req.body)
//   Hotsauce.create(req.body)
//   .then(hotsauce => {
//     res.redirect('/hotsauces/index')
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/index')
//   })
// }

function show(req, res) {
  Hotsauce.findById(req.params.id)
  .populate("owner")
  .then(hotsauce => {
    res.render("hotsauces/show", {
      hotsauce,
      title: "sauce details"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect("/hotsauces")
  })
}

export {
  index,
  create,
  // newHotsauce as new,
  show,
}