import mongoose from 'mongoose';

export const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("connected successfully");
        })
        connection.on('error', (err) => {
            console.log("MongoDB connection error. Make sure mongodb is connected!" + err);
            process.exit(1);
        })
    } catch(err) {
        console.log("Something went wrong");
        console.log(err);
    }
}