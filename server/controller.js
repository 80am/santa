module.exports={

    getallKids: (req, res) => {
        const db = req.app.get('db')
        console.log('we are in the controller')
        db.getKids()
        .then((allKids)=>{
            console.log("made it out of the DB with allkids", allKids)
            res.status(200).send(allKids)
        })
    }

}