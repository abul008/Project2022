import express from "express";
import {
    orderInfo,
    Getorderinfo
} from "../controllers/order.js";


const router = express.Router();



router.post('/order/',  orderInfo)
router.get('/getorder/',  Getorderinfo)




export const order = router