//for in loop 
const x = {
    js : 'javascript',
    cpp : 'c++',
    rb: 'ruby'
}// as we know for off loop is not working for object so for that we will use for in loop
for (const key in x) {
   // console.log(key);// isme key a jayengi sari 
   //console.log(`${x[key]}`);// is se value a jayengi 
   console.log(`${key} ${x[key]}`);// is se key value dono a jayengi 
   
   
    
   
    
}
// for in loop for arrays
const y = ["sugam" , "harsh", "kesar" , "harshit"]
for (const key in y) {
   // console.log(key); // ye sirf key dega means index print dega but same loop for of me values deta h 
    console.log(y[key]);// ab values ayengi 
    
  
    
}
 //**FOR IN LOOP MAP PE NI LG SKTA  */  
 
 