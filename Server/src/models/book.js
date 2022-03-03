
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const Bookinfo = new Schema({
    title:{
        type:String,
        required:true
    },
    snipped:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
},{titmestamps:true})

