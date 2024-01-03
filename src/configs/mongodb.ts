import mongoose from 'mongoose';

const connectMongoDB = async function(uri: string){
    try {
        await mongoose.connect(uri);
        console.log("✅ Connected to the database successfully");
    } catch(error) {
        console.log("🥵 Error connecting to the database");
    }

}

export default connectMongoDB;
