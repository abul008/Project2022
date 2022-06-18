import express from "express";
import {getMongoDb} from "../controllers/mongoDb.js";


const router = express.Router();

router.get('/get/:tablename', getMongoDb) 

export const routerMongoDb = router