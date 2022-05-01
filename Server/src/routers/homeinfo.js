import express from "express";
import { homeupload } from "../helpers/filershelper.js";
import { 
    homeinfo,
    HomeCaruselinfo, 
    gethomeinfo ,
    gethomecaruselinfo ,
    DeleteHomeinfo
} from "../controllers/homeinfo.js";

const router = express.Router();



router.post('/homeinfo/' , homeinfo);
router.post('/homecarusel/upload', homeupload.single('file') , HomeCaruselinfo);
router.get('/gethomeinfo', gethomeinfo);
router.get('/gethomecarusel' , gethomecaruselinfo);
router.delete('/homedelete/:id', DeleteHomeinfo);




export const homeroutes = router