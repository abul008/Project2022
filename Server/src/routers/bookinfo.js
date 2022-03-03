// const express = require('express');
import express from "express";
import {bookinfos} from "../controllers/bookinfo.js" ;
import {admilogin ,admilogins} from "../controllers/adminlogin.js";

const router = express.Router();


router.post('/login', admilogin)
router.get('/logins', admilogins)
router.get('/get/bookinfo/',bookinfos);



export const routes = router
