//singelton object
const user = new Object()
user.name = "sugam"
user.age = 20
user.salary = 35000
console.log(user);
// making object inside a object
const x = {
    email : "sugamms@user.com",
    Fullname:{  //object ke andr ek aur object bna dia 
        name1 : "kesar",
        age : 100,
        id : "chutad",
        salary:{  // object ke andr ek aur object 
            x:1000,
            y:20000
        }
    }
      
}
console.log(x.Fullname.id);
console.log(x.Fullname.age);
console.log(x);
 
// to combine objects
const y = {1:"a",2:"b"}
const z = {3:"c",4:"d"}
const a = {6:"o",7:"p"}
const i = Object.assign(y,z,a)// objects combine ho jayenge 
console.log(i);
console.log(y);// isme bhi sbki values print hongi "z","a" kyuki y ko target man lia
console.log(z);
const l = Object.assign({},y,z,a)// target y ko ni mana jayega jo starting me curly braces usko mana jayega
console.log(l);


//spread to another way to add two different objects
const h = {...y,...z,...a}// simpliest way to add 2 or more array
console.log(h);

console.log(Object.keys(user));// sari keys ayegi jo object user tha uski 
console.log(Object.values(user))// sari values a jayengi  object user ki

// destructuring
const course = {
    coursename:"jai hind",
    price:989,
    courseInstructor:"hitesh"
}
// another way to access inside object
const{courseInstructor}=course
console.log(courseInstructor);
console.log(course.courseInstructor);// is se courseinstructor ke andr jo h print ho jayega

//API = apna kam kisi aur ke sir pe dalna is API
// json = object jese bnate h same vese bs usko nam mt do 
//{ //key aur values dono string me deni padti 
//"name":"tmatar",
//"age":"456"
//}
//API = kbhi array ke form me bhi milti h array jisme bhot sare objects h 
[
    {},
    {},
    {}
]







