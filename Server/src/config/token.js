import jwt from "jsonwebtoken";


export const generateAccessToken =(param)=>{
  
    return jwt.sign(param, process.env.TOKEN_SECRET, { expiresIn: '1800s'});
  }

export const createRefreshToken = (param) =>{
        return jwt.sign(param, process.env.TOKEN_RAFRESH, { expiresIn: '18000s'});

}  

// console.log(generateAccessToken(name:"hello" ))

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }