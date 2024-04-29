// JSON stand for javascript object Notition
//JSON is light weight formate for storing and transporting data.
// JSON is often used when data is send from a server to a web page.

//create object
const fs=require('fs');
const biodata={
  name:"manoj",
  age:22, 
  channel:"all in one",
};
// console.log(biodata.name);


//object can convert into json by two method 1.parse(it is used for convert json to object) 2.stringfy(it convert object to json)
//const jsondata=JSON.stringify(biodata);
// console.log(jsondata); output:{"name":"manoj","age":22,"channel":"all in one"}
//const objdata=JSON.parse(jsondata);
//console.log(objdata); //output { name: 'manoj', age: 22, channel: 'all in one' } original dat



//3.readfile
//4.again convert back to js object (original)
//5.console


//1.convert to JSON 
//2.add in another file
const jsondata=JSON.stringify(biodata);
fs.writeFile("json1.json",jsondata,(err)=>{console.log("done");});

//readfile
fs.readFile("json1.json","utf-8",(err,data)=>{
  console.log(data);

  // convert json data to original data
  const origdata=JSON.parse(data);
  console.log(data);
  console.log(origdata);
});

