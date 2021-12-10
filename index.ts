import * as aws from "@pulumi/aws";

const env = process.env.ENVIRONMENT;

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket(`my-bucket-${env}`);

// Export the name of the bucket
export const bucketName = bucket.id;
