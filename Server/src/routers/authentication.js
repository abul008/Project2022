import express from "express"
import {
    loginPage,
    register,
    getUserInfo,
    refreshToken 
} from "../controllers/authentication.js"
import {verifyAccessToken} from "../helpers/jwt.helpers.js"

const router = express.Router();

router.post('/login',   loginPage)
router.post('/register', register )
router.post('/refresh', refreshToken)
router.get('/getadmin/', verifyAccessToken, getUserInfo)

export const authentication = router
