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
                newToy[0].toy_id])
            .then((newitem)=>{res.status(200).send(newitem)})
        })
    // } catch (error) {
    //     console.log(error)
    // }
    }
}