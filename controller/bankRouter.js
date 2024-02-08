const express=require("express")
const bankModel=require("../model/bankModels")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let bank=new bankModel(data)
    let result=await bank.save()
    res.json(
        {
            status:"success"
        }
    )
    //res.send("add")
})

router.get("/viewall",async(req,res)=>{
    let data=await bankModel.find()
    res.json(data)
   
})

   

module.exports=router