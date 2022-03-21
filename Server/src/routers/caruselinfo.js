import express from "express";
import { homeupload } from "../helpers/filershelper.js";
import { uploadhomeinfo, gethomeinfo } from "../controllers/homeinfo.js";

const router = express.Router();



router.post('/homeinfo/upload', homeupload.single('file') , uploadhomeinfo);
router.get('/gethomeinfo', gethomeinfo);



export const homeroutes = router