const express=require("express")
const data=require("./Data")

const rateLimit=require("express-rate-limit")
const app=express()

const limit=rateLimit({
    max:1,
    windowMs:5000

})

app.get("/data",limit,(req,res)=>{
    // console.log("adata")
    res.send({

        status:"success",
        data:data
    })
  
})

app.listen(5000,()=>{console.log("server running on port 5000")})