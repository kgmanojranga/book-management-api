import dotenv from 'dotenv';
import app from './app'
import * as process from "process";

dotenv.config({path: './config.env'})

const PORT = process.env.PORT
app.listen(PORT, () => console.log("🚀 Server is running on port number 9000"));
