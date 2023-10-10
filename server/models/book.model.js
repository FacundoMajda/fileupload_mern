import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genreID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
      autopopulate: true,
    },
    year: {
      type: Number,
      required: true,
    },
    authorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      autopopulate: {
        maxDepth: 1,
      },
    },
    coverImagePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
