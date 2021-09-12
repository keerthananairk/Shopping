
const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const bcrypt = require('bcrypt');

const bodyParser =require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');


const { response } = require('express');
const saltRound=10

const jwt=require('jsonwebtoken')


const app=express()
app.use(express.json());
app.use(cors({
    origin:("http://localhost:3000"),
    methods:["GET","POST"],
    credentials:true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key:"userId",
    secret:"welcome",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60 * 60 * 24,
    }
}))

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"shoppingsystem"

})

    
app.post("/list",(req,res)=>{

    const title= req.body.title
    const price=req.body.price
    const image=req.body.image


        db.query("INSERT INTO productlist(title,price,image)VALUES(?,?,?)",[title,price,image],(err,result)=>{
            console.log(err)
        })
    })
app.get("/product",(req,res)=>{
    const title=req.body.title
    const price=req.body.title
    const image=req.body.title
    db.query("SELECT * FROM productlist",[title,price,image],(err,result)=>{
        console.log(err)
    })
})

app.post("/register",(req,res)=>{

    const username= req.body.username
    const password=req.body.password

    bcrypt.hash(password,saltRound,(err,hash)=>{
        if(err){
            console.log(err)
        }
        db.query("INSERT INTO register(username,password)VALUES(?,?)",[username,hash],(err,result)=>{
            console.log(err)
        })
    })

    })
    const verifyJWT=(req,res,next)=>{
        const token=req.headers["x-access-token"]
        if(!token){
            res.send("need token")
        } else{
            jwt.verify(token,"jwtSecret",(err,decoded)=>{
                if(err){
                    res.json({auth:false, message:"authentication failed"})
                }else{
                    req.userUsername=decoded.Username;
                    next();
                }
            })
        }
    }

    app.get('/isUserAuth', verifyJWT ,(req,res)=>{
     res.send('Authenticated')
    })

    app.get("/login",(req,res)=>{
        if(req.session.user){
            res.send({loggedIn: true, user:req.session.user})
        }else{
            res.send({loggedIn:false})
        }
    })
  

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

        
        db.query("SELECT * FROM register WHERE username=?",username,(err,result)=>{
            if (err){
                res.send({err:err})
            }
            if(result.length>0){
                bcrypt.compare(password,result[0].password,(err,response)=>{
               if(response){      
                   const username=result[0].username
                   const token=jwt.sign({username},"jwtSecret",{
                       expiresIn:300,
                   })
                   req.session.user=result;


                   res.json({auth:true,token:token, result:result})
               }else{
                res.json({auth:false, message:"wrong username password combination"})
               }
                })
            }else{
                res.json({auth:false, message:"no user exist"})
            }
        });
    
    
    });   


 

app.listen(8081,()=>{
    console.log("server running")
})