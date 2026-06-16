const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb://127.0.0.1:27017/shopeasy"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => {
    console.log(err);
});

app.get("/", (req,res)=>{

    res.send("ShopEasy Backend Running");

});

app.get("/api/products",(req,res)=>{

    res.json([
        {
            id:1,
            name:"Wireless Headphones",
            price:50
        },
        {
            id:2,
            name:"Smart Watch",
            price:80
        },
        {
            id:3,
            name:"Gaming Mouse",
            price:30
        }
    ]);

});

app.post("/api/register",(req,res)=>{

    res.json({
        success:true,
        message:"Registration Successful"
    });

});

app.post("/api/login",(req,res)=>{

    res.json({
        success:true,
        message:"Login Successful"
    });

});

const PORT = 5000;

app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});