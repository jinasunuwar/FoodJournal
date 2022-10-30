var express = require('express');
const FoodDiaries = require('../models/FoodDiaries');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

router.get('/foodDiary', async function(req, res, next) {
  const fooddiaries = await FoodDiaries.find();
  res.render('foodDiary', {fooddiarieslist: fooddiaries});
});

router.get('/addFood', function(req, res, next) {
  res.render('addFood');
});

router.get('/myFoodLog', function(req, res, next) {
  res.render('myFoodLog');
});


router.post('/postfd', async function(req, res, next) {
  const foodentry  = new FoodDiaries({
    title: req.body.title,
    description: req.body.description,
    // inputPhoto: req.body.inputPhoto
  });
  await foodentry.save();
  res.redirect('/');
})




module.exports = router;
