import mongoose from 'mongoose';

const Schema = mongoose.Schema;

 const caruselScema = new Schema({

    get_absolute_url:{
      type:String,
      required:true
    },
    files:[Object],
})


export const Caruselinfoschema = mongoose.model('caruselinfo' , caruselScema )