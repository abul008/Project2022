// const express = require('express');
import express from "express";
import {upload} from "../helpers/filershelper.js";
import {
    uploadbookinfo,
    getBookinfo,
    DeleteBookinfo
} from "../controllers/bookinfo.js" ;
import {
    admilogin ,
    admilogins ,
    getUSers 
} from "../controllers/adminlogin.js";

const router = express.Router();


router.post('/login',   admilogin)
router.get('/logins', admilogins)

router.get('/getusers' , getUSers)
router.get('/getbookinfo',getBookinfo)
router.post('/photos/upload', upload.array('files') , uploadbookinfo);
router.delete('/bookdelete/', DeleteBookinfo);



export const routes = router
