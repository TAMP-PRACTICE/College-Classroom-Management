const mongoose=require("mongoose");

const roomSchema=mongoose.Schema({
    roomNumber:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["available", "occupied"],
        default:"available",
        required:true
    }
},
{
    timestamps:true
})


module.exports=mongoose.model("Room",roomSchema);