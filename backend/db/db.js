import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.Mongoose_Uri);
    console.log("connected to the database");
  } catch (error) {
    console.log("an error occured while connecting to the database");
  }
};

export default connectToDatabase;
