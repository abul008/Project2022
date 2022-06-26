import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const orderdata = new Schema({
  names: {
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
  phone: {
    type:String,
    required:true
    },
  message: {
    type:String,
    required:true
    },
  order:[Object]
}, {titmestamps:true})

export const orderSchema = mongoose.model('order' , orderdata)