import {Adminlogin} from "./src/models/login.js";
import localStrategy from "passport-local";
import bcrypt from "bcryptjs"


export const passports = (passport)=>{
    passport.use(
        new localStrategy.Strategy((email, password, done) => {
            Adminlogin.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
              if (err) throw err;
              if (result === true) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          });
        })
      );

      passport.serializeUser((user, cb) => {
        cb(null, user.id);
      });
      passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
          const userInformation = {
            username: user.username,
          };
          cb(err, userInformation);
        });
      });
    
}


