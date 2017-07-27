//======================
// REQUIREMENTS
//======================
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require("../models/user");


//======================
// INDEX
//======================
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', (req, res) => {

  console.log("Your user data");
  res.send("Your user data");
})

router.get('/:userId', (req, res) => {

  const userId = req.params.userId

  User.findById(userId)
  .then((user) => {
    res.render('users/show', {
      user: user
    })
  })
})

router.get('/:userId/edit', (req, res) => {
  res.send("Edit your user profile");
})
//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page




//======================
// CREATE
//======================




//======================
// EDIT
//======================



//======================
// UPDATE
//======================



//======================
// DELETE
//======================




//======================
// EXPORTS
//======================

module.exports = router;