import express from "express"
import { homeupload , upload} from "../helpers/filershelper.js"
import {
    getMongoDb, 
    postMongoDb, 
    UploadSinglMongoDb, 
    uploadMulterMongoDb, 
    deleteMongoDb, 
    UbdateMongoDb
} from "../controllers/mongoDb.js"

const router = express.Router();

router.post('/post/:create' , postMongoDb);
router.post('/singl/:upload', homeupload.single('file'), UploadSinglMongoDb)
router.post('/multiple/:upload', upload.array('files') , uploadMulterMongoDb)
router.get('/get/:tablename', getMongoDb)
router.delete('/:delete/', deleteMongoDb) 
router.put('/:update', UbdateMongoDb)

export const routerMongoDb = router