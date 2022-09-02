const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const routesIndexs = require('./routes/main')
const { join } = require('path');
const { type } = require('os');
const port=8080;
var app=express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')
app.use(routesIndexs)
//static files
app.use(express.static(join(__dirname,'public')))

// const middleware =  (req,res,next)=>{
//     let data='';
//     req.on('data',(chunk)=>{
//         data += chunk;
//     })
//    req.on('end',()=>{
//         res.end("terminated")
//     })
//     req.demodata = "demo data";
//     next()
// }



app.listen(port,()=>{
    console.log("open port server")
})


