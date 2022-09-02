const { Router } = require('express')
const { join } = require('path')
const fs = require("fs")
var routes = Router();


const videosMasterchief=(req,res)=>{
    res.setHeader('Content-Type','text/plain')
    const readVideos = fs.createReadStream(join(__dirname,'../videos.json'),'utf8').pipe(res);
   
}

routes.get('/',(req,res)=>{
    // res.setHeader('Content-Type','application/ejs')
    res.render('index')
})
routes.get('/videos',videosMasterchief);

routes.post('/new',(req,res)=>{
    const {value1 , value2} = req.body
    res.setHeader('Content-Type','text/plain')
    res.send(`<h1> todo ok ${value1} ${value2}</hq>`)
})

module.exports = routes;