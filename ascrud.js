// asynchronous mudule system 
const fs=require("fs");

//create file
fs.writeFileSync('read.txt', 'welcome to node');

//update file data overwrite 
fs.writeFileSync('read.txt', 'welcome to node,hello world');

//write in file
fs.appendFileSync('read.txt', ' manoj kumar');

// read file
// const buf_dat= fs.readFileSync('read.txt');
// console.log(buf_dat);

//node js include an additional dataytpe called buffer(not available in brower's javascript)
//buffer is mainly used to store binary data.while reading from a file or recieving packet over network.
//<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 2c 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 6d 61 6e 6f 6a 20 6b 75 6d 61 72>


// above problem can by this way
const buf_data= fs.readFileSync('read.txt');
orig_data=buf_data.toString();
console.log(orig_data);


// rename the file
// fs.rename('old file name','new file name')
fs.renameSync('read.txt','readwrite.txt');

//back original file name
fs.renameSync('readwrite.txt','read.txt');



// CRUD OPERATION

// create folder
fs.mkdirSync('manoj');
// create file inside manoj folder
fs.writeFileSync('manoj/bio.txt','manoj kumar');

// write something without overlap in exiting file
fs.appendFileSync('manoj/bio.txt','mandal');

