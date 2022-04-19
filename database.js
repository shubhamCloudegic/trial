const { connect } = require('http2');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
host : "localhost",
user :"root",
password:"Cloudegic",
database:'tutorial'
})

pool.getConnection((err,connection) =>{
    if(err){
        console.log(err)
    }
    if(connection) connection.release();
    return;
    
}
)
module.exports = pool;