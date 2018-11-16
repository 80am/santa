module.exports={

    getallKids: (req, res)=>{
        const db = req.app.get('db')
        db.getKids([req.session.user.user_id])
        .then((allKids)=>{
            res.status(200).send(allKids)
        })
    }

}