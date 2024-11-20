let score = 33
console.log(typeof score);// output type will be number.
let scorea = "33"
 let scoreAB = Number(scorea)
 console.log(typeof scorea); // output will be string  
 
 console.log(typeof scoreAB);// here output will be number because we have converted the string to number
 
// "33abc" = this value will also be converted to number from string but if we will print this it will give output nan that means not a number.
// null will be  give 0 
// common conversion 
// "33" = 33
// "33abcb" = NaN - not a number 
// true = 1 , false = 0 
  

// ***boolean conversion***
let x =  1
let y = Boolean(x)
console.log(x);
console.log(y); // 1 will be converted to true 
console.log(typeof y);
// common cnclusions :-
// 0 will be converted to false 
// null will also converted to false 
// undefined will also converted to false 
// "" this will also converted to false 




//    *** String converastion***
let num = 45 
let s = String(num)
console.log(num)

console.log(typeof s);
console.log(s); 



//**************OPERATIONS*********
let value = 3
let negativeValue = -value
console.log(negativeValue);// output will be -3.
 // string addition 
 let str1 = "hello"
 let str2 = " hitesh"
 let str3 = str1 + str2
 console.log(str3); //output hello hitesh.
 console.log("1" + 2 + 3);// output 123 as it will teat it all string kyuki phele "1" aur ye string h 
 console.log(1+2+"3");// output will 33 as string last me h to phele add hoga than string treat hoga 
 
 
 


















