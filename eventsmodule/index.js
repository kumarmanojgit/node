// event module
// NOde.js build-in module,called "event",
//where you can crete-, fire,and listen for -your own events
//example 1- registering for event to be fired only one time using once.
//examle 2- create an event emitter instance and register a couple of callback.



// 1.firstv create class
const EventEmitter=require("events");
// 2.then create object 
const event =new EventEmitter();
//3.define the structure
 event.on("sayMyName",()=>{
  console.log("My Name Manoj ");
 });
 event.on("sayMyName",()=>{
  console.log("My Name kumar ");
 });
 event.on("sayMyName",()=>{
  console.log("My Name mandal ");
 });
 //4. then fire and ordered should be same.
event.emit("sayMyName");


//example 3- registering for the event with callback parameter.

event.on("checkpage",(sc,msg)=>{
  console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkpage",200,"ok");
