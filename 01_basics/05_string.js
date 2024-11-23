//****** STRING******
const name = "sugam"
const count =  50
console.log( name  +  count );
 // modern way to print :- string string interpolation 
 console.log(`hello my name is ${name} and my count is ${count}`);
// `` these are called place holders

 // Another way to declare string 
 const name2 = new String('hars-hs')
 console.log(name2);
 console.log(name2[0]);// output will be first letter of string 'h'
 // to access all the methods will use name of variable.method name 
console.log(name2.length)// it will give length of string 
console.log(name2.toUpperCase());// it will change the character in uppper case 
console.log(name2.charAt(4));// it will give you konse index pe konsi value h 
console.log(name2.indexOf('s'));// ki ikonse index pe wo element h 

// const name3 = name2.substring(0,4)// to print string from 0 to 3 index
console.log(name2.substring(0,3));// end index include ni hoga
 console.log(name2.slice(0,8));// to slice  isme negative value bhi de skte h 
// trim = to remove extra spaces 
const x = "  sugamm    "
console.log(x);
console.log(x.trim());
//replace = to replace anything from string with some other value 
const z = "sdfgtyujhgfdfgh"
console.log(z.replace('gtyu','ccc'));// sp gty will replace by ccc.
//includes = used if a particular element  is present in string than it will give true 
console.log(z.includes('fdfgh'));





 

 