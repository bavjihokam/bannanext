import mongoose from 'mongoose';
const connection = {};

const connectdb = async () => {
   try {
     if(connection.isConnected){
       console.log('Using exiting connection');
       return;
     }
     const db = await mongoose.connect(process.env.MONGO_URI);
     connection.isConnected = db.connections[0].readyState;
   }catch(error){
     console.log(error);
     throw new Error(error);
   }

};

export default connectdb;
