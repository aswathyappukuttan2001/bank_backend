const mongoose=require("mongoose")

const bankschema=new mongoose.Schema(
    {
        bank:String,
        place:String,
        branch:String,
        managername:String,
    
    }
)
module.exports=mongoose.model("bank",bankschema)