import mongoose from "mongoose";
import  Colors from 'colors';
const connectdb=async () =>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to mangodb database ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`Error in mongodb ${error}`.bgRed.white);
    }
};
export default connectdb; 
