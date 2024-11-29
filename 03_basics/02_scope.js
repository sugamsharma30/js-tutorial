//let a = 10
//const b = 20 
//var c = 30
 // {} inko bolte h scope agr if ke sath lga h to usko scope wrna jis function ke sath h uska scope 
if(true){
    let a = 10 
    const b = 20
    var c = 30
}

//console.log(a);// it will not run because it is declared inside the if block scope(local scope ) we cant acces it outside it global scope

//console.log(b);// it will not run because it is declared inside the if block scope(local scope) we cant acces it outside it global scope
console.log(c);// it will give output as var can be accessed outside the if block(local scope) also
               // thats why var ko use krne ke liye mna kiya jata h 

//const cant be accesed outside local scope 
//let cant be accesed outside local scope 
//var can be accessed outside local scope and global scope

   //nested scopes scope inside scope
   function one(){
    const naem = "sugam "
    function two(){
        const website = "youtube"
        console.log(naem) // we can acess function one parameters in fucntion two but vice versa is not true 
        
        
    }
   // console.log(website);// yha pe hm 2 function ko 1 me access krenge  to ye ni ho payega 
    two()
   }
   // CONCLUSION , ye nikla ki parent function ke property ko child me access kr skte h pr child ki properties parent function ni 
   // inner function can access outer function but not vice versa 
   one() 
   // now understading nesting of scopes inside if
   if(true){
    const username = "sugam"
    if(username==="sugam"){
        const site = "instagram"
        console.log(username + site);// ye chl jayega kyuki scope ke andr access kr re h 
        
    }
    //console.log(site);// ye ni chlega we are accessing it outsude the 2nd if scope 
    
   }
   //console.log(username);// ye bhi ni chlega kyuki we are accessing it outside 1st if block
   


   //**************************INTRESTING *************/
   function addone(num){
    return num + 1
   }
   console.log(addone(5)) // ye bhi ek tareka h function k 
   // function ko variable ke andr bhi pass kr skte h 
   const addtwo = function(num){ // isko kbhi kbhi expression bhi bol dia jata h 
    return num *99
   }
   console.log(addtwo(3));// isme hmne function ko variable ke andr dia  
   

   