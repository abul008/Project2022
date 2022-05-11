import express from "express";
import {
    admilogin ,
    register,
    getAdminInfo ,
    getUSers,
    refreshToken 
} from "../controllers/adminlogin.js";
import {verifyAccessToken} from "../helpers/jwt.helpers.js"

const router = express.Router();



router.post('/login',   admilogin)
router.post('/register', register )
router.post('/refresh' , refreshToken)
router.get('/getadmin/' ,verifyAccessToken, getAdminInfo)
router.get('/getusers' , getUSers)

export const adminroutes = router
