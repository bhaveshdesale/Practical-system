import mongoose from "mongoose";

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      
    })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((error) => {
      console.error("DB connection failed:", error.message);
      process.exit(1); // Exit the process with failure
    });
};

export default dbConnect;
