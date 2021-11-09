import { Pepper } from '../models/peppers.js'

function newPepper(req, res) {
  Pepper.find({}, function(error, peppers){
    res.render('peppers/new', {
      title: "Add Pepper",
      peppers: peppers,
    })
  })
}

function create(req, res) {
  Pepper.create(req.body, function(error, pepper){
    res.redirect('/peppers/new')
  })
}

export {
  newPepper as new,
  create
}