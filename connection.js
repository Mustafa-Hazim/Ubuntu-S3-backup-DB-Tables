import mysql from 'mysql'

export const sql = mysql.createPool({
    host: process.env.LOCAL_DB_HOST,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASSWORD,
    database: 'sharawy'
});