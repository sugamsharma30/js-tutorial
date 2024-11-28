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
const i = Object.assign(y,z)// objects combine ho jayenge 
console.log(i);





