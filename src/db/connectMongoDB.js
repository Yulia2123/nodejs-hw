// import mongoose from 'mongoose';

// export const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log('✅ MongoDB connection established successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw error;
//   }
// };
import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
