module.exports={

    getallKids: (req, res) => {
        const db = req.app.get('db')
        console.log('we are in the controller')
        db.getKids()
        .then((allKids)=>{
            console.log("made it out of the DB with allkids", allKids)
            res.status(200).send(allKids)
        })
    },
    // uLogin: (req, res) => {
    //     console.log("Login", req.body.userName, req.body.passWord)
    //     var {userName,passWord}=req.body
    //     const db=req.app.get('db')
    //     db.userlogin([userName, passWord])
    //         .then((user)=>{
    //             console.log("this user 0 ", user[0])
    //             if(user[0]){
    //                 console.log('userfound')
    //                 req.session.user = user[0]
    //                 res.sendStatus(200)
    //                 console.log('on session', req.session)
    //             }else{
    //                 console.log('no user found')
    //                 res.sendStatus(401)
    //             }

    //          })
        
    // },
    sendToSanta: (req,res) => {
    // try{
        const db=req.app.get('db')
        console.log('This req.body',req.body)
        db.setWish([req.body.wish, req.body.toyPic])
        .then( (newToy)=>{

            console.log("this is the newToy", newToy[0].toy_id)
            console.log("this is session id",req.session.user)
            db.setKid([req.body.firstname,
                req.body.lastname,
                req.body.address,
                req.body.city,
                req.body.state,
                req.body.zip,
                req.body.country,
                req.body.wish,
                req.body.age,
                req.body.n_or_n,
                req.body.deer,
                req.body.kidPic,
                newToy[0].toy_id,
                req.session.user.id_of_user])
            .then((newitem)=>{res.status(200).send(newitem)})
        })
    },
    getPastWish: (req,res) =>{
        console.log("this is the req.session.user",req.session.user.id_of_user)
        const db=req.app.get('db')
        db.getpastWish([req.session.user.id_of_user])
        .then((newitem)=>{res.status(200).send(newitem)})

    },
    deleteWish: (req, res)=>{
        console.log("req.params on delete",req.params)
        const db=req.app.get('db')
        db.deletePastWish([req.params.id])
        .then((deleted)=>{
            res.status(200).send(deleted)})
            // db.deleteToy([req.params.toy_id])
            // .then((deletedToy)=>{res.status(200).send(deletedToy)})
        
    },
    changeBKnow: (req, res)=>{
        console.log('this is the user ', req.params)
        const db=req.app.get('db')
        db.changeBKnow([req.params.id])
        .then((newBknow)=>{
            res.status(200).send(newBknow)
        })
    }
}