// const express = require('express');
import express from "express";
import {bookinfos} from "../controllers/bookinfo.js" ;
import {admilogin} from "../controllers/adminlogin.js";

const router = express.Router();


router.get('/get/adminlogin/', admilogin)
router.get('/get/bookinfo/',bookinfos);



export const routes = router
