const express = require('express');

const port = process.env.PORT ||3000
const app=express()

app.use(express.json())

app.get('/',(_req,res)=>{
    res.send({msg: 'Hello'})
})
app.post('/',(req,res)=>{
    console.log(req.body,'req')
    res.send({msg: 'hi'})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))