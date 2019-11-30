const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost:4000';
const db = monk(connectionString);
 
module.exports = db;


//mongodb+srv://gokhan:<password>@okuokudb-mipdr.mongodb.net/test?retryWrites=true&w=majority