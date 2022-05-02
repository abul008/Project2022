import express from "express";
import {
    orderInfo,
    Getorderinfo,
    DeleteOrderInfo
} from "../controllers/order.js";


const router = express.Router();



router.post('/order/',  orderInfo)
router.get('/getorder/',  Getorderinfo)
router.delete('/orderdelete/', DeleteOrderInfo);





export const order = router