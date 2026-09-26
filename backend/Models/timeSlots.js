const mongoose=require("mongoose");

const timeSlotsSchema=mongoose.Schema({

    startTime:{
        type:String,
        required:true
    },
    entTime:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Timeslots",timeSlotsSchema);