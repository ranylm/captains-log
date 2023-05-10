import { Schema, model } from "mongoose";

export interface IComment {
  author: string;
  data: string;
}

const commentSchema: Schema = new Schema<IComment>(
  {
    author: String,
    data: String,
  },
  { timestamps: true }
);

export default model<IComment>("Comment", commentSchema);
