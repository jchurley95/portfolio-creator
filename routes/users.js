//======================
// REQUIREMENTS
//======================
var express = require('express');
var router = express.Router({mergeParams: true});
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

//======================
// NEW
//======================
//this is our index home page





//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the users's show page
router.get('/:userId', (req, res) => {
  const userIdToSearchDbFor = req.params.id
  // res.send(`Your user ID is ${userIdToSearchDbFor}`)

    User.findById(userIdToSearchDbFor)
        .then((user) => {
            res.render(
                'users/show',
                { user }
            );
        })
        .catch((error) => {
            console.log(`Error retrieving user with ID of ${userIdToSearchDbFor}`)
        });
});


//======================
// CREATE
//======================

//======================
// UPDATE
//======================

///NOT FINDING ROUTE TO THIS IN BROWSER,
//NEED TO UPDATE ALL USER INFO 
//THEN RENDER SHOW PAGE OF THAT USERS ID+INFO
 router.put('/:userId', (req, res) => {
    
    const userIdToUpdate = req.params.userId;
    const updatedUserInfo = req.body;
    console.log("found" + userIdToUpdate)

    User.findByIdAndUpdate(
        userIdToUpdate,
        updatedUserInfo,
        { new: true } // <-- DON'T FORGET THIS!!!
    )
        .then((user) => {
            console.log(`User with ID of ${userId} updated!`);

            res.render(
                'users/show',
                { user,
                  updatedUserInfo }
            )
        })
        .catch((error) => {
            console.log(`User with ID of ${userId} failed to update!`)
            console.log(error);
        })

});


//======================
// EDIT
//======================
router.get('/:userId/edit', (req, res) => {
    var userId = req.params.userId;

    User.findById(userId)
        .then((user) => {
            res.render(
                'users/edit',
                { user }
            );
        })
        .catch((error) => {
            console.log(`Error rendering edit form for user with ID of ${userId}`)
        })
});





//======================
// DELETE
//======================




//======================
// EXPORTS
//======================

module.exports = router;