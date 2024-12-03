// truhty and falseee value
//truthy value 
const userEmail = "sugamsharma@.com"
if(userEmail){ // yha pe hmne true h ki false ye compare he ni kia bs man lia h true h 
    console.log("got user email ");
    
}else{
    console.log("dont have user email");
    
}

//false value 
const email =""
if(email){ //yha pe hmne man lia ki value false he hogi kyuki email me koi value ni de rkhi h 
    console.log("got user email");
    
}else{
    console.log("dont have email ");
    
}
/*FALSY VALUES 
false , o , -0 , bingInt 0n , "" , null , undefined , nan

***TRUTHY VALUES
true , "0" ,(string ke andr 0 ), "false"(string ke andr koi bhi value truthy values h),
[] , {}(empty object bhi ),function(){}(empty function also truthy values)


false == 0 // output true 
false == '' // output true 
0 == '' //output true 
*/ 

// NULLISH COALESHING OPERATOR ?? : null undefined 
let val;
//val = 5 ?? 10 // iska output ayega 5 kyuki phele 5 h 
//val = null ?? 10 // ye krta h agr output null aye to uska safetty check kr de , iska output ayega 10 
//val = undefined ?? 15 // output 15 
// ?? ye sirf null aur undefined ke liye bna h 
val = null ?? undefined
console.log(val);
//In JavaScript, the nullish coalescing operator (??)
// is used to provide a fallback value when dealing with null or undefined. 
//It returns the right-hand operand if the left-hand operand is null or undefined; 
//otherwise, it returns the left-hand

               // SIMPLE WORDS ?? working
// simply it will check left side operator if it is null or undefined 
//it wil return right side value no matter what the right side value is 



// TERNARY OPERATOR
// condition ? true : false 

2 === 3 ? console.log("sugam") : console.log("harsh");

