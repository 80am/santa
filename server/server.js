require('dotenv').config()
const express = require('express')
const massive = require('massive')
const socket = require('socket.io')
const ctrl = require('./controller')
const session = require('express-session')
const bodyParser = require('body-parser')


const{
    MASSIVE_CONNECTION,
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
} = process.env

const app = express()

massive(MASSIVE_CONNECTION).then(db=>{
    app.set('db', db)
    console.log("DB connected")
})

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

app.post('/api/sendToSanta/', ctrl.sendToSanta)
app.get('/api/getallkids', ctrl.getallKids)
// app.post('/api/login', ctrl.uLogin)
// app.get('/api/getallkids', ctrl.getallKids)
// app.get('/api/getallkids', ctrl.getallKids)

// const io = socket
app.listen(SERVER_PORT, () =>
console.log(`Mr Smith lives in port ${SERVER_PORT}`))

// io.on('connection', socket => {
//     console.log("Bernard is connected")

//     socket.on('send-message', message => {
//         console.log(message)
//         io.sockets
//         .in(message.room)
//         .emit("message-to-users", {message: message.message})
//     })

//     socket.on("room change", roomObj =>{

//     })
    

// })

