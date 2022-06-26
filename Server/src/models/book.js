
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookScema = new Schema({
  name_am: {
    type:String,
    required:true
  },
  name_ru: {
    type:String,
    required:true
  },
  name_en: {
    type:String,
    required:true
  },
  author_am: {
    type:String,
    required:true
  },
  author_ru: {
    type:String,
    required:true
  },
  author_en: {
    type:String,
    required:true
  },
  Language_am: {
    type:String,
    required:true
  },
  ցategory: {
    type:String,
    required:true
  },
  Numberofpages: {
    type:String,
    required:true
  },
  Weight: {
    type:String,
    required:true
  },
  Publisher: {
    type:String,
    required:true
  },
  price: {
    type:String,
    required:true
  },
  discount: {
    type:String,
    required:true
  },
  cover_am: {
    type:String,
    required:true
  },
  cover_ru: {
    type:String,
    required:true
  },
  cover_en: {
    type:String,
    required:true
    },
  date: {
    type:String,
    required:true
    },
  get_absolute_url: {
    type:String,
    required:true
    },
  files:[Object],
})

export const Bookinfoschema = mongoose.model('bookinfo' , bookScema )
export const Bookinfo = new Schema({
  title: {
    type:String,
    required:true
    },
  snipped: {
    type:String,
    required:true
    },
  body: {
    type:String,
    required:true
    },
}, {titmestamps:true})

