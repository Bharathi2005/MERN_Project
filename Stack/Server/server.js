const express=require('express')
const app=express()
const dbConn=require('./config/db.js')
require('dotenv').config()
const port=process.env.PORT || 7778
app.get('/',(req,res)=>{
    res.json({message:"Welcome"})
})
app.listen(port,()=>{
    console.log(`Server running in : ${port}`)
})