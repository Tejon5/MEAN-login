const {Router} = require("express");
const User = require("../models/User");
const router = Router();
const jwt = require("jsonwebtoken");
require('dotenv').config();

const secreto = process.env.CONTRASEÑA;


function verifyToken(req,res,next){
    console.log(req.headers.authorization)
    if(!req.headers.authorization){
        return res.status(401).send("No estas autorizado")
    }
    const token = req.headers.authorization.split(" ")[1]
    if(token === "null"){
        return res.status(401).send("No estas autorizado")
    }
    const payload= jwt.verify(token, secreto)
    req.userId = payload._id
    next()
}

router.get("/",(req,res)=>{
    res.send("Hola capo")
})

router.post("/signup",async (req,res)=>{
    const{email, password} = req.body;
    const newUser = new User({email,password})
    await newUser.save();
    //secretKey tiene que ir en un .env
    const token = jwt.sign({_id: newUser._id}, secreto);
    res.status(200).json({token})
})

router.post("/signin",async(req,res)=>{
    const {email,password} =req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).send("Este email no existe ")
    }
    if(user.password!== password){
        return res.status(401).send("Te equivocaste de contraseña ")
    }
    const token = jwt.sign({_id: user._id}, secreto)
    return res.status(200).json({token})
})

router.get("/tasks",(req,res)=>{
    res.json([
        {
            _id:1,
            name:"task one",
            description:"Contratar a Juan Villalba",
            date: "2021-05-17t20:39:05.211Z"
        },
        {
            _id:2,
            name:"task two",
            description:"Contratar a Juan Villalba",
            date: "2021-05-17t20:39:05.211Z"
        },
        {
            _id:3,
            name:"task three",
            description:"Contratar a Juan Villalba",
            date: "2021-05-17t20:39:05.211Z"
        }
    ])
});

router.get("/private-tasks",verifyToken,(req,res)=>{
    res.json([
        {
            _id:1,
            name:"task one",
            description:"Todavia no contrato a Juan Villalba?",
            date: "2021-05-17t20:39:05.211Z"
        },
        {
            _id:2,
            name:"task two",
            description:"Todavia no contrato a Juan Villalba",
            date: "2021-05-17t20:39:05.211Z"
        },
        {
            _id:3,
            name:"task three",
            description:"Todavia no contrato a Juan Villalba?",
            date: "2021-05-17t20:39:05.211Z"
        }
    ])
})

router.get("/profile",verifyToken,(req,res)=>{
    res.send(req.userId)
})

module.exports = router;

