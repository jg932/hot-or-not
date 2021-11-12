import { Profile } from '../models/profile.js'

function index(req, res) {
  console.log("TEST TEST TEST")
  let modelQuery = req.query.name
  ? { name: new RegExp(req.query.name, 'i') }
  : {}
  Profile.find(modelQuery)
    .sort("name")
    .exec(function (error, profiles) {
      if (error) return next(error)
      res.render("profiles/index", {
        title: profiles,
        profiles: profiles,
        name: req.query.name,
        user: req.user,
      })
    })
}

function addPreference(req, res) {
  Profile.findById(req.user.profile._id, function(error, profile){
    profile.preference = req.body.preference
    profile.save(function (error){
      res.redirect("/profiles")
    })
  })
}

export {
  index,
  addPreference,
}