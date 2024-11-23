//*********memory **********
// stack memory is used for = primitive data type(in this we get the copy of value )
// heap memory is used for = non primitive data type(in this we get the refrence of orginal value )
let x = "sugamshaj@.com" // ye jayega stack me 
let y = x
y = "harshit@.com"
console.log(x);// x me value change ni hogi chaye refrence uska dia h kyuki ye primitive data type h isme orginal value nio copy value stroe hoti h 

console.log(y);// isme normal value update hoajyegi 

//non  primitive 
//****OBJECT****
let user = {
    email: "sugamaadj",
    number: 98765
}
let user2 = user
user2.email = "harshgoggle" // to accses email we use .and that value 
// value will change in user one also because here refrence is given not a copy value 
user2.number = 345678
user.email = "kjhgfdghjkjhgf"// dubra bhi change kr skte h 
console.log(user);
console.log(user2);

