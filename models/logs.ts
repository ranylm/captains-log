import { Schema, model } from "mongoose";

export interface ILog {
  title: string;
  entry: string;
  shipisBroken: boolean;
}

const logSchema: Schema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<ILog>("Log", logSchema);
