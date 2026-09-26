
const mongoose=require("mongoose");

const studentSchema=mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    rollNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    }

},
{
    timestamps:true
})


module.exports=mongoose.model("Student",studentSchema);
