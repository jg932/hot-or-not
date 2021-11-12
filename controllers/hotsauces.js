import  { Hotsauce } from "../models/hotsauce.js"
import mongoose from "mongoose"

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
  Hotsauce.findById(req.params.id, function(error, hotsauce){
    hotsauce.reviews.push(req.body)
    hotsauce.save(function(error) {
    console.log(error)
      res.redirect(`/hotsauces/${hotsauce._id}`)
    })
  })
}

function edit(req, res) {
  console.log("AM I HERE!!!");
  Hotsauce.findById(req.params.id)
  .then(hotsauce => {
    res.render('hotsauces/edit', {
      title: 'Edit',
      hotsauce,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/hotsauces')
  })
}

function update(req, res) {
  console.log(req.params)
  Hotsauce.findById(req.params.id)
    .then((hotsauce) => {
      const review = hotsauce.reviews.id(req.params.reviewId)
      review.set(req.body)
      hotsauce.save()
        .then (() => {
          res.redirect(`/hotsauces/${hotsauce._id}`)
        })
        .catch(err => {
          console.log(err)
          res.redirect("/hotsauces")
        })
    })
}

function editReview(req, res) {
  console.log("AM I HERE!!!");
  Hotsauce.findById(req.params.id)
  .then(hotsauce => {
    console.log(req.params, hotsauce)
    const review = hotsauce.reviews.find((review) => {
      console.log(review._id, req.params.reviewId, mongoose.Types.ObjectId(req.params.reviewId), review._id.toString());
      return review._id.toString() == req.params.reviewId;
    })
    console.log(review)
    res.render('hotsauces/reviews/edit', {
      title: 'Edit',
      hotsauce,
      review,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/hotsauces')
  })
}

export {
  index,
  create,
  show,
  deleteHotsauce,
  createReview,
  update, 
  edit,
  editReview,
}