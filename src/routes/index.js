const {Router} = require("express");

const router = Router();

router.get("/users", (req, res, next)=>{
    res.status(200).json({
        name: "Ariful Islam",
        age: 29
    })

})

router.post("/users", (req, res, next)=>{
    const {name, age}=req.body;
    
})

module.exports = router;