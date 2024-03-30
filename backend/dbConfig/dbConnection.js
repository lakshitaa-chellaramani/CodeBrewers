import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect("mongodb://localhost:27017");

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
