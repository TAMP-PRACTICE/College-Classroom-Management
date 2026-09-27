const mongoose=require("mongoose");

const timeSlotsSchema=mongoose.Schema({

    startTime:{
        type:String,
        required:true
    },
    entTime:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["available","occupied"],
        default:"available"
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Timeslots",timeSlotsSchema);