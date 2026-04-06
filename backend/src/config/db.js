import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(
            console.log("Databse connected successfully")
        )
    } catch (error) {
        console.log("Databse connection Failed");
    }
}

export default connectDB;