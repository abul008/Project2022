import express from "express";
import { homeupload } from "../helpers/filershelper.js";
import { 
    homeinfo,
    HomeCaruselinfo, 
    gethomeinfo ,
    gethomecaruselinfo 
} from "../controllers/homeinfo.js";

const router = express.Router();



router.post('/homeinfo/' , homeinfo);
router.post('/homecarusel/upload', homeupload.single('file') , HomeCaruselinfo);
router.get('/gethomeinfo', gethomeinfo);
router.get('/gethomecarusel' , gethomecaruselinfo);



export const homeroutes = router