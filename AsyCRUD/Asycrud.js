//passing argument are need to call back in asychronous mode
// we pass them a function argument -- a call back -- that get called when the task is completed
// the call back has an argument that tell you whether operation has completed successfully. then start for checking error.

const { kMaxLength } = require("buffer");
const fs= require("fs");

// create file as asynchronous
// fs.writeFile("Read.txt","today we are learning node",(err)=>{console.log("file is create")
// console.log(err);
// ;});

// update
//fs.appendFile("Read.txt"," update value",(err)=>{console.log("add data");});

//read
fs.readFile('Read.txt','UTF-8',(err,data)=>{console.log(data);});


// CRUD using Asynchrous

// 1.create a folder name it kk.
fs.mkdir('mk',(err)=>{console.log('folder created');});

// 2.create a file in it name bio.txt and data into it
fs.writeFile('mk/bio.txt','file create',(err)=>{console.log("omg");});

// 3.add more data into file at the end of existing data
fs.appendFile("./mk/bio.txt","plz like and share",(err)=>{console.log('add dat');});

//4.read data without buffer buffer data at first and file encode(utf-8)
fs.readFile('./mk/bio.txt', 'utf-8', (err,data)=>{console(err);});

//6.rename the file 
fs.rename('./mk/bio.txt','/.mk/mybio.txt',(err)=>{console.log('rename done');});

//7.delete both file and folder
fs.unlink('./mk/mybio.txt',(err)=>{console.log('delete file');});
// folder delete
fs.rmdir('./mk',(err)=>{console.log('delete folder');});




