import { S3 } from "@aws-sdk/client-s3";

export const s3Client = new S3({
  forcePathStyle: false,
  endpoint: "https://fra1.digitaloceanspaces.com",
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
  }
});
