const express= require("express");
const app=express();
const https=require("https");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const usersDB=[
    {
        username:"admin",
        password:"admin123",
        name:"Web master",
        lname: "@UP GDL",
        id:1,
        profile:{
            accesDB: true,
            accessFE: true,
            modifyProfile: true,
        },
        picture:"pictureURL",
    },
    {
        username:"profesorX",
        password:"xmen",
        name:"charles",
        lname: "xavier",
        id:2,
        profile:{
            accesDB: true,
            accessFE: false,
            modifyProfile: true,
        },
        picture:"pictureURL",
        savedPurchases:{
            hotel:"Mariott",
            arrival: "02-05-2023",
            departure: "02-29-2023",
        }
    },
]

//get
app.get("/login/:user/:pass", (req,res) =>{
    const p_username = req.params.user;
    const p_password = req.params.pass;
    var user=usersDB.find((user)=>{
        return user.username === p_username;
    });
    console.log(user);
    if(typeof user !== 'undefined'){
        if(user.password===p_password){
            res.json(user); //success case
        } else{
            res.json({error:"Unauthorized access", message:"Wrong user or password"});
        }
    } else {
        res.json({
            error:"Unknown user",
            message:"Username doesn't exist",
        });
    }
    
});

//post
app.post("/login", (req,res) =>{
    const p_username = req.body.user;
    const p_password = req.body.pass;
    console.log(p_username+"/"+p_password);
    var user=usersDB.find((user)=>{
        return user.username === p_username;
    });
    console.log(user);
    if(typeof user !== 'undefined'){
        if(user.password===p_password){
            res.json(user); //success case
        } else{
            res.json({error:"Unauthorized access", message:"Wrong user or password"});
        }
    } else {
        res.json({
            error:"Unknown user",
            message:"Username doesn't exist",
        });
    }
    
});

app.listen(5000, () =>{
    console.log("Example app listeing on port 5000");
});