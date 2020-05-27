import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Doc", schema);
