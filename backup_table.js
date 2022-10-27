import { sql } from './connection.js'
import { uploadFile } from './upload_file.js'

export default async function backupTable(table, interval) {
    // backup function to get the data from database and send file to the s3
    const backup = () => {
        sql.query(`SELECT * FROM ${table}`, async (err, result) => {
            if (err) { console.log(err); return }
            await uploadFile('upback', `databases/sharawy/${table}.json`, JSON.stringify(result))
        })
    }
    // first backup
    backup()
    // interval backup 
    setInterval(() => {
        backup()
    }, interval);
}