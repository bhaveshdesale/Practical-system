
import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  Subjectname: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const subjectModel = mongoose.model("Subject", subjectSchema); 
export default subjectModel;
