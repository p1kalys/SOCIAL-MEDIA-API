const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get('/',(req,res)=>{
    res.send("HomePage");
});

app.listen(8800,() => {
    console.log("Backend is running")
})