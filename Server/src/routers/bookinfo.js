// const express = require('express');
import express from "express";
import {uploadbookinfo} from "../controllers/bookinfo.js" ;
import {admilogin ,admilogins} from "../controllers/adminlogin.js";

const router = express.Router();


router.post('/login', admilogin)
router.get('/logins', admilogins)
router.post('/get/bookinfo/',uploadbookinfo);



export const routes = router
