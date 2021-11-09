import  { Hotsauce } from "../models/hotsauce.js"

function index(req, res) {
  Hotsauce.find({})
  .then(hotsauces => {
    res.render("hotsauces/index", {
      title: "Hot or Not",
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

function deleteHotsauce(req, res) {
  Hotsauce.findById(req.params.id)
  .then(hotsauce => {
    if (hotsauce.owner.equals(req.user.profile._id)) {
      hotsauce.delete()
      .then(() => {
        res.redirect("/hotsauces")
      })
    } else {
      throw new Error ("🚫 Not Authorized! 🚫")
    }
  })
  .catch(error => {
    console.log(error)
    res.redirect("/hotsauces")
  })
}

function createReview(req, res) {
  console.log("LOOOOOOOOK", req.params.id)
  Hotsauce.findById(req.params.id, function(error, hotsauce){
    hotsauce.reviews.push(req.body)
    hotsauce.save(function(error) {
      res.redirect(`/hotsauces/${hotsauce._id}`)
    })
  })
}

export {
  index,
  create,
  // newHotsauce as new,
  show,
  deleteHotsauce,
  createReview,
}