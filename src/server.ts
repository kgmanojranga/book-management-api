import dotenv from 'dotenv';
import app from './app';
import connectMongoDB from "./configs/mongodb";

dotenv.config({path: './config.env'})

// Initializing server port
const PORT = process.env.PORT || 9000;

// Initializing MongoDB Database
if(process.env.DATABASE && process.env.DB_PASSWORD) {
    const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
    (async () => connectMongoDB(DB))();
}
app.listen(PORT, () => console.log(`🚀 Server is running on port number ${PORT}`));
