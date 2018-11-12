require('dotenv').config()
const express = require('express')
const massive = require('massive')


const{
    MASSIVE_CONNECTION,
    SERVER_PORT
} = process.env

const app = express()

massive(MASSIVE_CONNECTION).then(db=>{
    app.set('db', db)
    console.log("DB connected")
})

app.use(express.json())

app.listen(SERVER_PORT, () =>
console.log(`Mr Smith lives in port ${SERVER_PORT}`))