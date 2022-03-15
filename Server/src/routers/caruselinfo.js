import express from "express";
import { caruselupload } from "../helpers/filershelper.js";
import { uploadcaruselinfo, getcaruselinfo } from "../controllers/caruselinfo.js";

const router = express.Router();



router.post('/caruselphotos/upload', caruselupload.single('file') , uploadcaruselinfo);
router.get('/caruselunfo', getcaruselinfo);



export const caruselroutes = router