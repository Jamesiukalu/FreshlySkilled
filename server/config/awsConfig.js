require('dotenv').config({ path: '../config.env' });
const AWS = require('aws-sdk');

// Load AWS credentials from environment variables
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
s3.listBuckets((err, data) => {
    if (err) {
      console.error("Error listing S3 buckets: ", err);
    } else {
      console.log("Successfully connected to AWS S3, buckets: ", data.Buckets);
    }
  });
const s3 = new AWS.S3();

module.exports = s3;
