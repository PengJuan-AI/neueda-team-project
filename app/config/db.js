import mysql from 'mysql2/promise'

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '719458145',
    database: 'music_db',
});

export default connection;