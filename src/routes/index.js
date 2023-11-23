const { Router } = require("express");
const upload = require("../services/uploader");
const {s3Uploader, getFileStream} = require("../services/s3Bucket")

const router = Router();

// Upload Single File for le-node
router.post("/files", upload.single("avatar"), async(req, res, next)=>{
    try {
       const data = await s3Uploader(req.file.buffer, req.file.originalname)
        console.log(req.file)
        res.json({data})
    } catch (error) { 
        next(error)
    }
});

router.get("/files/:key", (req,res,next)=>{

    try{
      const data = getFileStream(req.params.key);
      data.pipe(res)
    }catch(error){ 
      next(error)
    }
})
router.get("/users", (req, res, next) => {
  res.status(200).json({
    name: "Ariful Islam",
    age: 29,
  });
});

router.post("/users", (req, res, next) => {
  const { name, age } = req.body;
  res.send(name, age)
});

module.exports = router;
