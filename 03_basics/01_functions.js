//        FUNCTIONS
// mtlb h jinta bhi apne code likha h usko ek package me dalke jha chate vha use krna 
function x(){  // function likho than nam do than small brackets aur uske bad curly braces me likho function k scope

    console.log("x");
    console.log("y");
    console.log("z");
    console.log("a");
    console.log("b");   
}
// tp print this function 
x()


// to add two numbers
//function add(number1 , number2){ // yha hmne diye parameters to add 
   // console.log(number1 + number2);
    
//}
//add(4,5)// yha hmne diye arguments
  
//another way to add
function add(number1,number2){
    return number1 + number2 // return me sum store to function ke bhar bhi use kr skte h 
                            // aur return ke bad function me koi bhi log statement likhnege wo ni chlegi
}
const result = add(4,6)
console.log("result:" , result);

function username(name){
    if(name === undefined){// agr koi name print ni hogha to undefined ayega isliye if lga dia 
        console.log("enter user name");
        return
        
    }
    return`${name} just logged in `
}
console.log(username("sdfghj"));// agr koi argument ni denge to if statement chlegi 


