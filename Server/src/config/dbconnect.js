import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
    console.log('connected')
    }).catch(err => console.log(err))
    console.log(`MongoDB Connected `);
  }