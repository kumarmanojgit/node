const os=require('os');

//1.Architecture of os
console.log(os.arch());
// host name (desktop name)
console.log(os.hostname());
// plateform like mac ,window
console.log(os.platform());
// temp file loction
console.log(os.tmpdir);

//window version 
console.log(os.type());
console.log(os.version());


//free memory space in BG(RAM) 
const freememory=os.freemem();
//console.log(freememory);// it give in byte
console.log(`${freememory/1024/1024/1024}`);// it give in gb

// total memory(RAM)
const totalmemory=os.freemem();
//console.log(totalmemory);// it give in byte
console.log(`${totalmemory/1024/1024/1024}`);// it give in gb
