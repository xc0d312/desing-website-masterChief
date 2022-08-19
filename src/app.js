const express = require('express')
const { urlencoded } = require('body-parser')
const { join } = require('path')
const indexRoute = require('./routes/routes')


var app = express()
const port = 8080


app.use(indexRoute)
app.use(urlencoded({extended:true}))
app.set('views',join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname,'public')))


app.listen(port,()=>{
    console.log(join(__dirname,"public/"))
    console.log("open por sever")
})