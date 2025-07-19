const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const path = require("path")
const cookieParser = require("cookie-parser")

const app = express()
dotenv.config()

//Database Connection

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connection Successfull"))
.catch(err => console.log(err))


//Request Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Set view engine

app.set("View engine", "ejs")

//Set static folder

app.use(express.static(path.join(__dirname, "public")));



//parse cookie
app.use(cookieParser(process.env.COOKIE_SECRET))


//routing setup



//error handling

//404 not found










app.listen(process.env.PORT, () => {
    console.log(`~App running port ${process.env.PORT}`);
    
})