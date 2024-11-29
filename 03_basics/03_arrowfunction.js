// current context ko access krne ke liye this keyword k use krenge 
const user = { // ye bna dia object 
    name:"sugam",
    price:400,
      welcome:  function(){ // object ke andr function bna dia
        console.log(`${this.name}, welcome to the company `);// this yha pe cuurent context ko acces krega
        // agr name change bhi hua to sugam ke alwa kuch aur to this usko access krega
        
    }
    
}
user.welcome()
user.name = "harsh"
user.welcome()// yha pe  nam change ho jayega kyuki value fix ni  kri thi this key word di ajis se current context ko refer krega wo 
console.log(this);// iska answer ayega {} means empty kyuki globally kuch h ni 
// but agr hm same cheej console me krte h to ata h window kyuki vha pe global scope h window 

function chai(){
    let name1 = "sugam"
    console.log(this.name1);// ye dega undefine kyuki function me this ko ese use ni kr skte 
                            // but same cheej object me chlti h 
}
chai()// yha pe this empty ni ayega bhot sari values ayengi kyuki hm usko function ke andr access kr re h 


//declration of function through arrow function 

const chai1 =() => {
    let username = "kesar"
    console.log(this.username);// isme bhi output undefined ayega arrow function me bhi ese use ni kr skte 
    console.log(this);
    

}
chai()
// basci syntax of arrow function 
// () => {}
    const add = (num1 , num2) => {
        return num1 + num2

    }
    console.log(add(56,76))
    
    // arrow function syntax as implicit return mtlb return keyword nhilgna pd rha h 
    const add1 = (num1 , num2) =>  num1+num2 // ek line me execution ho jayega
    console.log(add1(6,8));
    // object return 
    const add2 = (num1 , num2) => ({username1:"harsh"})
    console.log(add2());
    