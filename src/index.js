require("dotenv").config();
const express = require("express");
const userRoute = require("./routes")
const app = express();

app.get("/health", (req,res)=>{
    res.status(200).json({
        message: "OK 🆗"
    })
})
// Route Handle
app.use(userRoute);

// Global Error Handle
app.use((error, req, res, next)=>{
    const errorObj = {
        message: error?.message || "Something went wrong",
        status: error?.status || 500,
    };
    res.status(errorObj.status).json(errorObj)
})

app.listen(4000, ()=>{
     console.log("http://localhost:4000")
})
