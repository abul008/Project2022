import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const register = new Schema({
  name: {
    type:String,
    required:true
  },
  lastname: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  },
  userType: {
    type:String,
    required:true
  },
  photo_url: {
    type:String,
    required:false
  }
  
}, {titmestamps:true})

export const Register = mongoose.model('register' , register )