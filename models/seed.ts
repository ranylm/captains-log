import log, { ILog } from "../models/logs";

export default async function seed() {
  try {
    await log.create({
      title: "captain",
      entry: "Lost",
      shipisBroken: false,
    } as ILog);

    await log.create({
      title: "captain",
      entry: "Lost",
      shipisBroken: false,
    } as ILog);

    await log.create({
      title: "captain",
      entry: "Engines Shut down",
      shipisBroken: true,
    } as ILog);

    await log.create({
      title: "captain",
      entry: "deadend",
      shipisBroken: true,
    } as ILog);
  } catch (err: any) {}
}
