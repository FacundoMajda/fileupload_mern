import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    min: 0,
    max: 2023,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
