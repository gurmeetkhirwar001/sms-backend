require("dotenv").config();
const express = require("express");
const router =  express.Router()

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multerS3");
const { Router } = require("express");

aws.config.update({
    secretAccessKey:process.env.ACCESS_SECRET,
    accessKeyId:process.env.ACCESS_KEY,
    region: process.env.REGION,
})

const BUCKET=process.env.BUCKET
const S3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        bucket: BUCKET,
        s3: s3,
        acl: "public-read",
        

        metadata: function (req, file, cb) {
            cb(null, { fieldName: "TESTING_METADATA" });
          },
           key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
    })
})

router.post('/upload', upload.single('file'), async function (req, res, next) {

    res.send('Successfully uploaded ' + req.file.location + ' location!')

})

router.get("/list", async (req, res) => {

    let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
    let x = r.Contents.map(item => item.Key);
    res.send(x)
})


router.get("/download/:filename", async (req, res) => {
    const filename = req.params.filename
    let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
    res.send(x.Body)
})

router.delete("/delete/:filename", async (req, res) => {
    const filename = req.params.filename
    await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
    res.send("File Deleted Successfully")

})

module.exports = Router