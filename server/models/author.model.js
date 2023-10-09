import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  biography: {
    type: String,
    required: true,
  },
});

export default authorSchema;
