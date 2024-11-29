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


// to calculate multiple values using spread operator
function calculate(...num1){// spread operator use hoga and sari values mil jayengi 
    return num1 // agr triple dots ni lgayenge to sirf 200 print hoga
}
console.log(calculate(200,500,400,600));

// how to passs object insdie a function 
const y = {
    name:"sharma",
    age:22
}
function handel(y){
    console.log(`user name is ${y.name} and age is ${y.age}`);
    
}
handel(y)

//array inside fucntion 
const newarray = [2,3,4,5,6,7]
function l(newarray){
    return newarray[0]

}
console.log(l(newarray));
