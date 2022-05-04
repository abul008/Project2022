import express from "express";
import {
    admilogin ,
    getAdminInfo ,
    getUSers 
} from "../controllers/adminlogin.js";

const router = express.Router();



router.post('/login',   admilogin)
router.get('/getadmin/:id', getAdminInfo)
router.get('/getusers' , getUSers)

export const adminroutes = router
