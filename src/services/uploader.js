const multer = require("multer");
const path = require("path");

 

const upload = multer({
  // dest: "./upload",
//   storage: storage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter: (req, file, done) => {
    const fileName = file.mimetype;
    const fieldName = file.fieldname;

    if (
      fieldName === "avatar" &&
      (fileName === "image/png" ||
        fileName === "image/jpg" ||
        fileName === "image/jpeg")
    ) {
      done(null, true);
      return
    } 

    if (fieldName === "docs" && fileName === "application/pdf") {
      done(null, true);
      return
    } 

    done(new Error("File Type Not Supported"))
  },
});

module.exports = upload;
