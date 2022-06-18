import express from "express";
import { homeupload } from "../helpers/filershelper.js";
import { 
    homeinfo,
    HomeCaruselinfo, 
    gethomeinfo ,
    // gethomecaruselinfo ,
    DeleteHomeinfo,
    DeleteHomeCaruselinfo
} from "../controllers/homeinfo.js";

const router = express.Router();

router.post('/homeinfo/' , homeinfo);
router.post('/homecarusel/upload', homeupload.single('file') , HomeCaruselinfo);
router.get('/gethomeinfo', gethomeinfo);
router.delete('/homedelete/', DeleteHomeinfo);
router.delete('/homecaruseldelete/', DeleteHomeCaruselinfo);




export const homeroutes = router