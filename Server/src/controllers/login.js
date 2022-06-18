import passport from "passport";
import  JWT  from "jsonwebtoken";
import bcrypt from "bcrypt";
import {Register} from "../models/register.js";
import {generateAccessToken ,createRefreshToken} from "../config/token.js";
import passportLocal from "passport-local";
import {UserToken} from "../models/userToken.js";





passport.use(new passportLocal.Strategy({
    usernameField: "email"
   },
    
   async(email,password,done)=>{
  
    const user = await Register.findOne({email})

    try{
      if(user === null){
        return done(null, null, {message: "Incorrect email"});
    }
     
    if(await bcrypt.compare(password, user.password)){
        
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
      Register.findById(id,(err,user)=>{
       done(err,user)
     })
    }) 

 
 export const refreshToken = (async(req, res) => {
    // take the refresh token from the user
    const refreshToken = req.body.token;

  
    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    
    JWT.verify(refreshToken, process.env.TOKEN_RAFRESH,  async (err, user) => {
      err && console.log(err);
       
      try{

  
      const newAccessToken = generateAccessToken({user:user.user});
      const newRefreshToken = createRefreshToken({user:user.user});

      if(!(newAccessToken && newRefreshToken)) return res.status(401).json("Сheck your login details")
       
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

    }catch(error){
      res.send(error.message)
    } 
    });
    
  

  }
 )   
  
 export const loginPage = (async (req,res ,next)=>{
  passport.authenticate('local',async (error,user,info)=>{
    try{
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
    "user": token,
    "refreshToken": refreshToken,
    }

  await UserToken({
      userId:user.id,
      token: refreshToken
    }).save()
     

    req.session.userid = response

    return res.json(req.session.userid);
  }catch(error){
    return next(error.message)
  }

  })(req, res,next)
})

export const register = (async(req,res)=>{
    const {name ,lastname , email ,password , userType , photo_url} = req.body
 
    const hashedPwd = await bcrypt.hash(password, 10);
       
    
   
    const register =  new  Register({
      name,
      lastname,
      email,
      password:hashedPwd,
      userType,
      photo_url
    })

    await  register.save()

    res.send("Registration completed successfully")
})


export const getUserInfo =  (async (req,res)=>{
  console.log("hello")
  try{
   
    if(req.payload.user){
  
    const adminlogin = await Register.findById({_id:req.payload.user}).select('-password')
      

    if(adminlogin){
      req.session.user = adminlogin
      return res.send(req.session.user)
    }
  }    

  res.send('try again')

}catch(error){
  res.status(400).send({name:"The query did not work"})
}
}
)

