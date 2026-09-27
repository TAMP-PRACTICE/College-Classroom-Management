 const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },

    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Subject", subjectSchema);