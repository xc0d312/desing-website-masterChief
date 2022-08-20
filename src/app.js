const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const port=5555;
var app=express()
app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended:true}))

// app.use((req,res,next)=>{
//     console.log(req.url)
//     next()
// })


app.get('/',(req,res)=>{
    console.log(req.body)
    res.setHeader('contentype','text/json')
    nombre=`{
        "movies":"nada"
    }`
    var result = JSON.parse(nombre)
    res.send(result)

})
app.listen(port,()=>{
    console.log("open port server")
})


