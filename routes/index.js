const express = require('express'); // importing the express library
const router = express.Router();// we make router here
const randomWyrQuestion=require('../model/wyr_questions');
//.. means go up by index.js
//randomWyrQuestion is going to have whatever that will be exported from the function on wyr_question.js

//router that handle homepage
router.get('/', (req, res) => {
    res.send ('placeholder for home page')
})
//we add possible router it can respond to
router.get ('/wyr', function ( req, res, next){
    // const wyr = {
    //     'question':'Live in a circle house or a triangle house',
    //     'answer1':' Circle house',
    //     'answer2':' Triangle house'
    // }
    const wyr = randomWyrQuestion()// now calling on the function in the model directory
    res.json(wyr)
})
module.exports = router; //this router will become indexRouter in the server.js