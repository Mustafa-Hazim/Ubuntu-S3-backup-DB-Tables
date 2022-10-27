// Imports your configured client and any necessary S3 commands.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";

export async function uploadFile(bucket, path, content) {
    // Specifies a path within your Space and the file to upload.
    const bucketParams = {
        Bucket: bucket,
        Key: path,
        Body: content,
	ContentType: 'application/json'
    };

    try {
        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        console.log(
            "Successfully uploaded object: " +
            bucketParams.Bucket +
            "/" +
            bucketParams.Key
        );
        return data;
    } catch (err) {
        console.log("Error", err);
    }

    upload();
}
