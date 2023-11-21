const { Router } = require("express");
const upload = require("../services/uploader");

const router = Router();

const fields = upload.fields([
  { name: "avatar", maxCount: 1 },
  {
    name: "docs",
    maxCount: 3,
  },
]);
router.post("/files", fields, (req, res, next) => {
  try {
    console.log(req.files);
    res.send("File Upload Successful");
  } catch (error) {
    next(error);
  }
});

router.get("/files", (req, res) => {
  res.json("file");
});
router.get("/users", (req, res, next) => {
  res.status(200).json({
    name: "Ariful Islam",
    age: 29,
  });
});

router.post("/users", (req, res, next) => {
  const { name, age } = req.body;
});

module.exports = router;
