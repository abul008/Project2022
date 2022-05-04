import {User} from "../models/login.js";
import passport from "passport";
import passportLocal from "passport-local";


// export const pasportini = passport.initialize();
// export const pasportsession = passport.session();

// passport.session();
// passport.initialize();



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

    req.session.user = user.id

    // user.isAuthenticated = true;

    return res.json(req.session.user);

  })(req, res)
})


export const getUSers = ((req,res)=>{  

  req.session.user = "hello"
   res.send(req.session)
})



export const getAdminInfo =  ( async  (req,res)=>{

     
//  console.log(  req.params.id)
console.log(req.user)
    try{
       
      if(req.params.id){
      
        const adminlogin = await User.findById({_id:req.params.id}).select('-password')
      
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
    // if(!admilogin) return statu
 

})

