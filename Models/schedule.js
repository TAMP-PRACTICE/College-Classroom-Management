const mongoose=require("mongoose");

const scheduleSchema=mongoose.Schema({
   classId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Class",
    required:true
   },
   date:{
    type:Date,
    required:true
   },
   day:{
    type:String,
    enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    required:true
   },
   timeSlot:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Timeslots",
    required:true
   },
   teacher:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Teacher",
    required:true
   },
   room:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Room",
    required:true
   },
   subject:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subject",
    required:true
   }
 
},
{timestamps:true}
)

module.exports=mongoose.model("Schedule",scheduleSchema);