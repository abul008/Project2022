import {User} from "../models/login.js";
import passport from "passport";
import  JWT  from "jsonwebtoken";
import  createError from "http-errors"
import {generateAccessToken ,createRefreshToken} from "../config/token.js";
import passportLocal from "passport-local";
import {UserToken} from "../models/userToken.js";
import { verifyAccessToken } from "../helpers/jwt.helpers.js";

const tokenList = {}

let refreshTokens = [
 
  {
    status: 'Logged in',
    user: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxZTUwZjFmMGQ1ZTVkMzUxZmRmODJkIiwiaWF0IjoxNjUyMjI4MDM1LCJleHAiOjE2NTIyMjk4MzV9.6T2xa15i7pEFJhPD_0RIltzGHeICs4s5B7ANyDI2hXA',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxZTUwZjFmMGQ1ZTVkMzUxZmRmODJkIiwiaWF0IjoxNjUyMjI4MDM1LCJleHAiOjE2NTIyNDYwMzV9.f104RlB_UhkSApKCGkl9m09raPGJmEePnRDW_Vjc5Vw'
  }
]




passport.use(new passportLocal.Strategy({
    usernameField: "email"
   },
    
   async(email,password,done)=>{
  
    const user = await User.findOne({email})

    try{
      if(user === null){
        return done(null, null, {message: "Incorrect email"});
    }
     
    // console.log(req.session.admin)
 
    if(await user.password === password){
        
          return done(null, user);
    }
 
    done(null, null, {message: "Incorrect password"});
    }catch(err){
      console.log(err)
    }
      
    }));


    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });  
    
    passport.deserializeUser((id,done)=>{
      User.findById(id,(err,user)=>{
       done(err,user)
     })
    }) 

 
 export const refreshToken = (async(req, res) => {
    // take the refresh token from the user
    const refreshToken = req.body.token;

  
    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    
    JWT.verify(refreshToken, process.env.TOKEN_RAFRESH,  async (err, user) => {
      err && console.log(err);

  
      const newAccessToken = generateAccessToken({user:user.user});
      const newRefreshToken = createRefreshToken({user:user.user});
       
      const UserTokenFind = UserToken.findOneAndUpdate({userId:user.user} , {
        userId:user.user,
        token: newRefreshToken
      })

      if(!UserTokenFind)  return res.status(403).json("Refresh token is not valid!");
       
       await UserToken.findOneAndUpdate({userId:user.user} , {
        userId:user.user,
        token: newRefreshToken
      })


  
      res.status(200).json({
        user: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  

  }
 )   
  
 export const admilogin = (async (req,res)=>{
  passport.authenticate('local',async (error,user,info)=>{
            if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }

    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
    });

   const token = generateAccessToken({user:user.id})
   
   const refreshToken = createRefreshToken({user:user.id})
   
  
   const response = {
    "status": "Logged in",
    "user": token,
    "refreshToken": refreshToken,
    }

  
    
  await UserToken({
      userId:user.id,
      token: refreshToken
    }).save()
     
  


    req.session.userid = response

    

  
    return res.json(req.session.userid);

  })(req, res)
})


export const getUSers = ((req,res)=>{  

  req.session.user = "hello"
   res.send(req.session)
})


// console.log(verifyAccessToken())

export const getAdminInfo =  (async (req,res)=>{
  try{
   
    if(req.payload.user){
  
    const adminlogin = await User.findById({_id:req.payload.user}).select('-password')
  
    if(!adminlogin) return res.send('duq grancvac cheq');
    

    if(adminlogin){
      req.session.user = adminlogin
      return res.send(req.session.user)
    }
  }    

  res.send('duq grancvac cheq')

}catch(error){
  res.status(400).send({name:"grancvac cheq"})
}
}
)

