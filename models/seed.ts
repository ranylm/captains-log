import log, { ILog } from "../models/logs";

export default async function seed() {
  try {
    await log.create({
      title: "captain",
      entry: "Lost",
      shipIsBroken: false,
    } as ILog);

    await log.create({
      title: "captain",
      entry: "Lost",
      shipIsBroken: false,
    } as ILog);

    await log.create({
      title: "captain",
      entry: "Engines Shut down",
      shipIsBroken: true,
    } as ILog);

    await log.create({
      title: "captain",
      entry: "deadend",
      shipIsBroken: true,
    } as ILog);
  } catch (err: any) {}
}
