// Assignment 12
let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
let date = new Date();

console.log("Year: "+date.getFullYear());
console.log("Month: "+(date.getMonth()+1));
console.log("Date: "+date.getDate());
console.log("Day: "+(date.getDay()+1));
console.log("Hours: "+date.getHours());
console.log("Minutes: "+date.getMinutes());
console.log("Total time since 1st jan 1970: "+(Math.ceil(date.getTime() / 1000))+" seconds");

// Assignment 17
// DD/MM/YYYY HH:mm
console.log(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes());
//DD-MM-YYYY HH:mm
console.log(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes());
// YYYY-MM-DD HH:mm
console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes());
