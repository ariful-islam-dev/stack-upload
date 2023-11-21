const {Router} = require("express");
const upload = require("../services/uploader");

const router = Router();

router.post("/files", upload.single("avatar"), (req, res, next)=>{
    try {
        console.log(req.file);      
        res.send('File Upload Successful')
    } catch (error) {
        next(error)
    }
})

router.get("/files", (req, res)=>{
    res.json("file")
})
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