require("dotenv").config()
const express= require('express')


const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3');


aws.config.update({
    secretAccessKey: process.env.SECRET_KEY,
    accessKeyId: process.env.ACCESS_KEY,
    region: process.env. AWS_REGION,

});
const BUCKET = process.env.S3_BUCKET_NAME
const s3 = new aws.S3();

const Upload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: BUCKET,
        metadata: function (req, file, cb) {
            
            cb(null,{file});
        },
        key: function (req, file, cb) {
            
            cb(null,file.fieldname, Date.now().toString())
        }
    })
})
// router.post('/upload', upload.single('file'), async function (req, res, next) {

//     res.send('Successfully uploaded ' + req.file.location + ' location!')

// })

// router.get("/list", async (req, res) => {

//     let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
//     let x = r.Contents.map(item => item.Key);
//     res.send(x)
// })


// router.get("/download/:filename", async (req, res) => {
//     const filename = req.params.filename
//     let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
//     res.send(x.Body)
// })

// router.delete("/delete/:filename", async (req, res) => {
//     const filename = req.params.filename
//     await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
//     res.send("File Deleted Successfully")

// })

module.exports=Upload