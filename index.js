require('dotenv').config()
const express=require("express")
const app=express()
const port=3000;
app.get('/',(req,res)=>{
res.send("hello world!")
})
app.get('/login',(req,res)=>{
res.send("my name is roushan")
})
app.get('/twitter',(req,res)=>{
res.send('<h1>hi there from twitter</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`)
})