// the http.createServer() method includes request and response parameters which is supplied by node.js
// the request object can be used to get information about the current HTTP request eg url,request header, and data.
//the response object can be used to send a response for current HTTP request.
// if the response from the HTTP server is supposed to be displayed as html.
//you should include an HTTP header with the correct content type.

const http= require("http");

const server =http.createServer((req,res)=>
{ 
  if(req.url=='/')
  {
    res.end("This is my first server created by me !");
  }
  else if(req.url=='/about')
  {
    res.end("this is about page");
  }
  else if(req.url=='/contact')
  {
    res.end(" this contact page ");
  }
  else {
    res.writeHead(404,{"content-type":"text/html"});
    res.end(" <h1>This is  400 error page</h1>");
  }
  
});

// how to identify request 
server.listen(9000,"127.0.0.1",()=>
{
  console.log("listening to the port no 9000");
});