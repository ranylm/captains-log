import { Error, ObjectId } from "mongoose";
import logs from "../models/logs";

import Log, { ILog } from "../models/logs";

type tLog = ILog | null;
type tLogs = ILog[];

const getLogs = async (): Promise<tLogs> => {
  try {
    const data: ILog[] = await Log.find({});
    return data;
  } catch (err: any) {
    return err;
  }
};

const getLogById = async (id: ObjectId): Promise<tLog> => {
  try {
    const data: ILog | null = await Log.findById(id);
    return data;
  } catch (err: any) {
    return err;
  }
};

const createLog = async (log: ILog): Promise<tLog> => {
  try {
    const data: ILog = await Log.create(log);
    return data;
  } catch (err: any) {
    return err;
  }
};

const updateLog = async (id: ObjectId, log: ILog): Promise<tLog> => {
  try {
    const data: ILog | null = await Log.findByIdAndUpdate(log);
    return data;
  } catch (err: any) {
    return err;
  }
};

const deleteLog = async (id: ObjectId): Promise<tLog> => {
  try {
    const data = await Log.findByIdAndDelete(id);
    return data;
  } catch (err: any) {
    return err;
  }
};

export default { getLogs, getLogById, createLog, updateLog, deleteLog };
