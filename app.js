const MongoClient = require('mongodb').MongoClient;
//Include this reference to the repos/circulation.js file
//Create a folder in the project called repos within it a file called circulationRepos.js
const circulationRepo = require('./repos/circulationRepos');
//Require this JSON file which is already included in the project
const data = require('./circulation.json');
const dbName = 'circulation';
const url = 'mongodb://localhost:27017';

async function main(){
 const client = new MongoClient(url);
 await client.connect(); ///stop processing until job gets done
 
 const results = await circulationRepo.loadData(data); // an async function is created in the file circulationRepo
 console.log(results.insertedCount, results.ops);
 //check if our databases are up and running
 // the admin is an object that gives access to all
 // sort of administrative rights on the database
 //Here we are just listing the server status i.e database server on line 15
 //And we are also listing all the databases on the server on line 16
 const admin = client.db(dbName).admin();
//  console.log(await admin.serverStatus());
 console.log(await admin.listDatabases());
 //runing this via your console using the command "node app.js"
 //Not you must be in the directory of your application
 // This would show u all adminstrative services and databases on the server
}
//Running this successfully you should see the ciruclation database created in the database server
main();