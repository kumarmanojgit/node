//passing argument are need to call back in asychronous mode
// we pass them a function argument -- a call back -- that get called when the task is completed
// the call back has an argument that tell you whether operation has completed successfully. then start for checking error.

const fs= require("fs");

// create file as asynchronous
// fs.writeFile("Read.txt","today we are learning node",(err)=>{console.log("file is create")
// console.log(err);
// ;});

// update
//fs.appendFile("Read.txt"," update value",(err)=>{console.log("add data");});

//read
fs.readFile('Read.txt','UTF-8',(err,data)=>{console.log(data);});

