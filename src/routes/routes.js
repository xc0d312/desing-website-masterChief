const { Router } = require("express")


const  router = Router()
router.get('/',(req,res)=>{
    res.render('index',({title:"nodejs website"}))
})
router.get('/about',(req,res)=>{
    res.render('about',({title:"about me"}))
})
router.get('/contact',(req,res)=>{
    res.render('contact',({title:"contact me"}))
})

module.exports = router
