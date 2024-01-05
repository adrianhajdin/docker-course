import mongoose from "mongoose";

let isConnected = false;

async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DB_URL as string);
    isConnected = true;
  } catch (err) {
    console.log(err);
  }
}

export default dbConnect;
