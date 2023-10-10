import mongoose from "mongoose";

const genreSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const GenreModel = model("Genre", genreSchema);
