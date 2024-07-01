import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: {
  type: String,
  required: [true,"must provide a title"]
  },
  note: {
  type: String,
  required: [true,"must provide a note"]
  },
  ownerId:{
    type: mongoose.Schema.Types.ObjectId,
    required:[true,"must have ownerid"]
  },
  pinned:{
    type:Boolean,
    default:false,
  },{timestamps:true }
})