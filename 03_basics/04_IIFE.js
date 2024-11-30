// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)
// function that is executed immeditely
// we use iife because global scope se jo pollution hoti h kayi bar to jo bhi global scope ke variables h usko vha se htane ke liye 
(function chai(){// ye ek named iife h jiska nam h chai
    console.log(`db connected`);
    
})();// ye bn gya iife function , isme semi collons dene pdenge agr iske bad dusra function call krna h to 
// global scope ke pollution se problem hoti kayi bar to vha ke variables ko htane ke liye hmne iife k use kia 

// arrow functions as iife
((name) =>{
    console.log(`db connected two ${name}`);
    
})('sugam')
// IMPORTANT 2 iife sath likhne h to phele walle iife ko khtm krne ke bad semicolon aygega
