require('dotenv').config()
const express = require('express')
const massive = require('massive')
const socket = require('socket.io')
const ctrl = require('./controller')
const session = require('express-session')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')



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
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

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

app.post('/auth/signup', async (req, res) => {
    let { email, password } = req.body
    //make sure that no one else in the data base has that email address
    let foundUser = await req.app.get('db').user_check([email])
    if(foundUser[0]) return res.status(200).send('Email already in use.')
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    console.log("hashed and salted")
    let user = await req.app.get('db').create_user([email, hash])
    console.log("created user")
    req.session.user = user[0]
    console.log("found user and on session", req.session.user)
    res.status(200).send(req.session.user)

})
app.post('/auth/login', async (req, res) =>{
    let { email, password } = req.body
    let foundUser = await req.app.get('db').user_check([email])
    if(!foundUser[0]) return res.status(200).send('Username/email not found')
    let result = bcrypt.compareSync(password, foundUser[0].user_password)
    if(result){
        req.session.user = foundUser[0];
        res.status(200).send(req.session.user)
    }else{
        res.status(401).send('Nice try')
    }
})

app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send("session went boom")
})

app.get('/api/user-data', (req,res) => {
    if(req.session.user){
        res.status(200).send(req.session.user)
    }else{
        res.status(401).send('Please log in')
    }
})


