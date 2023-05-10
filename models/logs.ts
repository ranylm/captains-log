import { Schema, model } from "mongoose";

export interface ILog {
  title: string;
  entry: string;
  shipIsBroken: boolean;
  comments: Schema.Types.ObjectId[];
}

const logSchema: Schema = new Schema<ILog>(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export default model<ILog>("Log", logSchema);
