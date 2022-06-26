import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const homeScema = new Schema({
    phone_number: {
      type:String,
      required:true
    },
    phone_number2: {
      type:String,
      required:true
    },
    email: {
      type:String,
      required:true
    },
    addres: {
      type:String,
      required:true
    },
    facebook_url: {
      type:String,
      required:true
    },
    instagram_url: {
      type:String,
      required:true
    },
    telegram_url: {
      type:String,
      required:true
    },
    copyright_am: {
      type:String,
      required:true
    },
    copyright_ru: {
      type:String,
      required:true
    },
    copyright_en: {
      type:String,
      required:true
    },
    litleinfo_am: {
      type:String,
      required:true
    },
    litleinfo_ru: {
      type:String,
      required:true
    },
    litleinfo_en:{
      type:String,
      required:true
    }
}, {timestamps: true}) 

const homeCaruselSchema = new Schema({
    get_absolute_url: {
      type:String,
      required:true
    },
    fileName: {
      type: String,
      required: true
    },
    fileHreaf: {
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
}, {timestamps: true}) 

export const Homeinfoschema = mongoose.model('homeinfo' , homeScema)
export const HomeCaruselInfoScema = mongoose.model('homecaruselinfo' , homeCaruselSchema)