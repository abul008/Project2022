import express from "express";
import {upload} from "../helpers/filershelper.js";
import { uploadcaruselinfo } from "../controllers/caruselinfo.js";

const router = express.Router();



router.post('/caruselphotos/upload', upload.array('files') , uploadcaruselinfo);



export const caruselroutes = router