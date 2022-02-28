import mongoose from 'mongoose';
const Schema = mongoose.Schema;




const bookinfoSchema = new Schema({
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


export const Bookinfo = mongoose.model('bookinfo' , bookinfoSchema )