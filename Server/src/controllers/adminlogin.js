import {Adminlogin} from "../models/login.js";
import passport from "passport";
import passportLocal from "passport-local";


export const pasportini = passport.initialize();
export const pasportsession = passport.session();



passport.use(new passportLocal.Strategy({
    usernameField: "email"
   },
    
   async(email,password,done)=>{
  
    const user = await Adminlogin.findOne({email})

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

    passport.serializeUser((user, done) => {
      
      done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
    
      done(null, admilogin.find((user) => user._id === id));
    });
    
  
 export const admilogin = (async (req,res)=>{
  passport.authenticate('local',(error,user,info)=>{
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

    req.session.user = user

    // user.isAuthenticated = true;

    return res.json(req.session.user);

  })(req, res)
})


export const getUSers = ((req,res)=>{  

  req.session.user = "hello"
   res.send(req.session)
})



export const admilogins =  ( async  (req,res)=>{
    const adminlogin = await Adminlogin.findOne({email:"azroyan1234@mail.ru"})
    res.send(adminlogin)

})