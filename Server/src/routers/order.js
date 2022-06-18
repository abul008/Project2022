import express from "express";
import {
    orderInfo,
    DeleteOrderInfo
} from "../controllers/order.js";

const router = express.Router();

router.post('/order/',  orderInfo)
router.delete('/orderdelete/', DeleteOrderInfo);

export const order = router