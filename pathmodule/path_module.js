const path=require('path');

console.log(path.dirname("Desktop/compl-node/node-tutorial/pathmodule/path_module.js"));// folder path

console.log(path.extname("Desktop/compl-node/node-tutorial/pathmodule/path_module.js")); //used extension in file
console.log(path.basename("Desktop/compl-node/node-tutorial/pathmodule/path_module.js")); // show thw all file in this folder

//all three properties are show in one method
 const mypath=console.log(path.parse("Desktop/compl-node/node-tutorial/pathmodule/path_module.js"));
 
 console.log(mypath);
 
 