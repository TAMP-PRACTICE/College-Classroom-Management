const mongoose=require("mongoose");

const timeSlotsSchema=mongoose.Schema({

    startTime:{
        type:String,
        required:true,
        enum: [
        "9:00 AM",
        "9:50 AM",
        "11:00 AM",
        "11:50 AM",
        "12:40 PM",
        "1:30 PM",
        "2:20 PM",
        "3:10 PM"
    ]

    },
    entTime:{
        type:String,
        required:true,
        enum:[
        "9:50 AM",
        "10:40 AM",
        "11:50 AM",
        "12:40 PM",
        "1:30 PM",
        "2:20 PM",
        "3:10 PM",
        "4:00 PM"
        ]
    },
    status:{
        type:String,
        required:true,
        enum:["available","occupied"],
        default:"available"
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Timeslots",timeSlotsSchema);