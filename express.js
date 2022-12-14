
const express= require("express")

const app=express()
const port=3000
let a=10, b=7;

app.get("/",(req,res)=>{
    res.send("hello world!")
})

app.get("/user",(req,res)=>{
    res.send("Estamos en user")
})



app.listen(port,()=>{
    console.log(`la resta de ${a} - ${b} es: ${a-b}`)

})