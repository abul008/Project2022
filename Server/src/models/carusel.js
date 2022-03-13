import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const caruselScema = new Schema({
    
    get_absolute_url:{
        type:String,
        required:true
    },
    fileName: {
        type: String,
        required: true
    },
    fileHreaf:{
        type:String,
        required:true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
}, {timestamps: true});


export const Caruselinfoschema = mongoose.model('caruselinfo' , caruselScema )