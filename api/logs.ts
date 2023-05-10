import { Error, ObjectId, UpdateQuery } from "mongoose";
import logs from "../models/logs";

import Log, { ILog } from "../models/logs";

type tLog = ILog | null;
type tLogs = ILog[];

const getLogs = async (): Promise<tLogs> => {
  const data: ILog[] = await Log.find({});
  return data;
};

const getLogById = async (id: string): Promise<tLog> => {
  const data: ILog | null = await Log.findById(id).populate("comments");
  return data;
};

const createLog = async (log: ILog): Promise<tLog> => {
  const data: ILog = await Log.create(log);
  return data;
};

const updateLog = async (id: string, log: UpdateQuery<ILog>): Promise<tLog> => {
  const data: ILog | null = await Log.findByIdAndUpdate(id, log);
  return data;
};

const deleteLog = async (id: string | undefined): Promise<tLog> => {
  if (id === undefined) throw new Error("Deleting Undefined");
  const data = await Log.findByIdAndDelete(id);
  return data;
};

export default { getLogs, getLogById, createLog, updateLog, deleteLog };
