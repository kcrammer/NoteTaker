
const router=require("express").Router()
const db=require("../db/db.json")

router.get("/api/notes",function(req,res){
     res.json(db)
})

router.post("/api/notes",function(req,res){
    db.push(req.body)
    res.json(db)
})

module.exports=router