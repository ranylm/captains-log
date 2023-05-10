import { Error, ObjectId, UpdateQuery } from "mongoose";
import logs from "../models/logs";

import FoodLog, { IFoodLog } from "../models/foodlogs";

type tLog = IFoodLog | null;
type tLogs = IFoodLog[];

const getLogs = async (): Promise<tLogs> => {
  const data: IFoodLog[] = await FoodLog.find({});
  return data;
};

const getLogById = async (id: string): Promise<tLog> => {
  const data: IFoodLog | null = await FoodLog.findById(id);
  return data;
};

const createLog = async (log: IFoodLog): Promise<tLog> => {
  const data: IFoodLog = await FoodLog.create(log);
  return data;
};

const updateLog = async (
  id: string,
  log: UpdateQuery<IFoodLog>
): Promise<tLog> => {
  const data: IFoodLog | null = await FoodLog.findByIdAndUpdate(id, log);
  return data;
};

const deleteLog = async (id: string | undefined): Promise<tLog> => {
  if (id === undefined) throw new Error("Deleting Undefined");
  const data = await FoodLog.findByIdAndDelete(id);
  return data;
};

export default { getLogs, getLogById, createLog, updateLog, deleteLog };
