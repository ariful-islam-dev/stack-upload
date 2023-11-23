const path = require("path")

// Using Le-Node for file storage
const S3 = require("aws-sdk/clients/s3");

const s3bucket = new S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRETE_KEY,
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    s3ForcePathStyle: true
});

/**
 * 
 * @param {Buffer} file 
 * @param {string} fileName 
 * @returns 
 */

const s3Uploader = (file, fileName)=>{
   
        //  
      
    const params = {
        Bucket:process.env.BUCKET_NAME,
        Key: fileName,
        Body: file,
        ACL:"public-read", 
    };

   return s3bucket.upload(params).promise();
}
 const getFileStream = (key)=>{
    return s3bucket.getObject({
        Bucket: process.env.BUCKET_NAME,
        Key: key
    }).createReadStream();
 }
module.exports= {s3Uploader, getFileStream};