
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const adminlogin = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{titmestamps:true})


export const Adminlogin = mongoose.model('adminlogin' , adminlogin )