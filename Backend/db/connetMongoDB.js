import mongoose  from "mongoose";

const connectMongoDB = async () =>{ 
    try {
        //const conn = connection & this code is for the connection of database
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected :${conn.connection.host}`);

    }catch(error){
        console.log(`Error connection to mongoDB : ${error.message} `);
        process.exit(1);
    }
}

export default connectMongoDB;