import { connect, connection, ConnectOptions } from "mongoose";

const connectMongo = async () => {
  connect(process.env.MONGO_URI!);

  connection.once("open", () => {
    console.log("connected to mongodb");
  });
};

export default connectMongo;
