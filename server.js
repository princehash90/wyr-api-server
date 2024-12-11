const express =require('express')// importing express

const indexRouter=require('./routes/index')//importing the router

const app = express()// making a new web application

app.use('/', indexRouter)// everything will be sent to the router to be handle

// the port we want to use
const server = app.listen(process.env.PORT || 3000, function (){
    console.log('server running on port ',server.address().port);
});
