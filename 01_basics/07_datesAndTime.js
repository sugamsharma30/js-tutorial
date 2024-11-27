//dates = in js are defined from jan 1 1970 app koi bhi date declare krenge to ye yhi se calculate hongi 
// dates are stored in miliseconds
let date = new Date()// to create date 
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date );// type of date is obejct 


//to crreate a date 
let createDate = new Date(2024 , 11 ,5)// sbse phele year define krenge than month(month k index 0 se start hoga) than date define krenge 
console.log(createDate.toDateString());

//another way to create date 
let x = new Date("01-8-1970") // month(is bar month 1 se he start hoga) , date and than year 
console.log(x.toDateString());


let z = new Date()
console.log(z.getDate());// sirf date a jayegi 
console.log(z.getDay()); // day ayega output me 
console.log(z.getFullYear());
console.log(z.getHours());
console.log(z.getMilliseconds());




