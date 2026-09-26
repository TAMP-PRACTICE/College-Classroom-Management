const mongoose=require("mongoose");

const teacherSchema=mongoose.Schema({

    teacherName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },


},
{timestamps:true}
)

module.exports=mongoose.model("Teacher",teacherSchema);