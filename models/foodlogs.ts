import { Schema, model } from "mongoose";

export interface IFoodLog {
  title: string;
  entry: string;
  rations: number;
}

const foodLogSchema: Schema = new Schema<IFoodLog>(
  {
    title: String,
    entry: String,
    rations: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model<IFoodLog>("FoodLog", foodLogSchema);
