import log, { ILog } from "../models/logs";
import foodlog, { IFoodLog } from "../models/foodlogs";

async function seed() {
  try {
    await log.create({
      title: "Day 1",
      entry: "Lost",
      shipIsBroken: false,
    } as ILog);

    await log.create({
      title: "Day 2",
      entry: "Lost",
      shipIsBroken: false,
    } as ILog);

    await log.create({
      title: "Day 5",
      entry: "Engines Shut down",
      shipIsBroken: true,
    } as ILog);

    await log.create({
      title: "Day 123",
      entry: "deadend",
      shipIsBroken: true,
    } as ILog);
  } catch (err: any) {}
}

async function seed2() {
  try {
    await foodlog.create({
      title: "Day 1",
      entry: "Not much food",
      rations: 4,
    } as IFoodLog);

    await foodlog.create({
      title: "Day 3",
      entry: "supplies dwindlling",
      rations: 2,
    } as IFoodLog);

    await foodlog.create({
      title: "Day 7",
      entry: "No more food",
      rations: 0,
    } as IFoodLog);

    await foodlog.create({
      title: "Day 21",
      entry: "I found some more...",
      rations: 2,
    } as IFoodLog);
  } catch (err: any) {}
}

export { seed, seed2 };
