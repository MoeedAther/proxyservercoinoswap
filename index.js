import express from 'express'
const  app=express()
import  fetch from  "node-fetch"
import cors from 'cors'

app.use(express.json())
app.use(cors())

app.post("/stealthEX/Dave", async (req, res)=>{
    const {url}=req.body
    let response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    res.json(await response.json())
})

app.post("/changehero/Dave", async (req, res)=>{

    console.log(req.body)
    // const {from,to,amount}=req.body

    let response = await fetch(`https://api.changehero.io/v2/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '46799cd819854116907d2a6f54926157',
        },
        body: JSON.stringify(req.body)
    });

    res.json(await response.json())

})



app.listen(3000,()=>{
    console.log("Server listening")
})