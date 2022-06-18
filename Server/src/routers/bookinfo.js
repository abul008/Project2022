// const express = require('express');
import express from "express";
import {upload} from "../helpers/filershelper.js";
import {
    uploadbookinfo,
    DeleteBookinfo,
    UbdateBookinfo
} from "../controllers/bookinfo.js" ;

const router = express.Router();

router.post('/bookcreate', upload.array('files') , uploadbookinfo);
router.post('/bookubdate/' , UbdateBookinfo)
router.delete('/bookdelete/', DeleteBookinfo);



export const routes = router
