// singleton object made using cnostructor
//object.create// singleton object  made using constructor

// object made using literal is not singleton
      //object literals // values in object are declare in key value pair
      const z = Symbol("key")// to use symbol inside object
const x = {name: "sugam",
    age:10,
    [z]:"key",     // so to use symbolin object we use this way 
    salary:30000 ,
    "full name" :"sugam sharma"
}
console.log(x.age);// to access objects elements
// to acces full name we cant use . method 
// to access this 
console.log(x["full name"]);// it is a another way to access objects elemnts 
// we cant access full name using x.full name ye syntax he glt ho jayega

// to print symbol in object 
console.log(x[z]);

// to change value in objects 
x.name = "harsh"
console.log(x);

//to fix values in java script that it cant changed

//Object.freeze(x)
//x.age = 76
//x.name = "kesar"
//console.log(x);

x.greeting = function(){
    console.log("hello sharma ji"); // function add to our object 
    
}
x.greeting2 = function(){
    console.log(`hello sharma ji ${this.name}`);// this hm refrence lete h
}
console.log(x.greeting());
console.log(x.greeting2());





