import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const authorSchema = new mongoose.Schema(
  {
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
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        autopopulate: {
          maxDepth: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

authorSchema.plugin(autopopulate);

const Author = mongoose.model("Author", authorSchema);
export default Author;
