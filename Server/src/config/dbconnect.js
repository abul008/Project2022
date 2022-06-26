import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB || "mongodb+srv://books:books1234@abul.m5g87.mongodb.net/books?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(()=>{
    console.log('connected')
    }).catch(err => console.log(err))
    console.log(`MongoDB Connected `)
}

export const dbName = {
  book: 'book',
  carusel: 'carusel',
  home: 'home',
  order: 'order'
}
