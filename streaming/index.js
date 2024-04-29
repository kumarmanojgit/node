// Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. In Node.js, there are four types of streams −

// Readable − Stream which is used for a read operation.

// Writable − Stream which is used for a write operation.

// Duplex − Stream which can be used for both reading and write operation.

// Transform − A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws several events at a different instance of times. For example, some of the commonly used events are −

// data − This event is fired when there is data is available to read.

// end − This event is fired when there is no more data to read.

// error − This event is fired when there is an error receiving or writing data.

// finish − This event is fired when all the data has been flushed to the underlying system

// Streaming means listening to music or watching a video in ‘real-time’, instead of downloading a file to your computer and watching it later



// 1st method of streaming 
const fs=require('fs');
const http=require('http');
const server=http.createServer();
//  server.on("request",(req,res)=>{
//   // shortcut (node-f)
    
//     fs.readFile('input.txt',(err,data)=>{
//       if(err) return console.error(err);
//       res.end(data.toString());
//     });
//  });
//  server.listen(8000,"127.0.0.1");



 // 2nd method of streaming 


// server.on("request",(req,res)=>{
//   const rstream=fs.createReadStream("input.txt");
//   rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
//   });
//   rstream.on("end",()=>{
//     res.end();
//   });
//   // file not exit 
//   rstream.on('error',(err)=>{ console.log("file not find")})
//  });
//  server.listen(8000,"127.0.0.1");


// Third ways
// read and write 
server.on("request",(req,res)=>{
  const rstream=fs.createReadStream("input.txt");
   rstream.pipe(res);
 });
 server.listen(8000,"127.0.0.1");

