
const express=require('express')
const cors=require('cors')
const mongoose = require("mongoose");
require('dotenv').config()
const postRoutes=require('./routes/routes')

const app = express();


 app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })

);

app.get("/", (req, res) => {
       res.json({
       author: "sreekanth",
      message: "Hello, MERN is awesome!",
    });
 });

app.use("/posts",postRoutes);

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection

db.on("error",console.error.bind(console,"connection error"))

db.once("open",function(){
    console.log("connected successfully")
})

const server=app.listen(process.env.PORT||PORT,function(){
    console.log('server is running on port',process.env.PORT||PORT)

})