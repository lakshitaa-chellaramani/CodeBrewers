import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(`mongodb+srv://aditya:aditya@cluster0.lukpppn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);


    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
