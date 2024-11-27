//            ARRAYS -:
const x = [1,2,3,4,5,]
const z  = ["ram" , "sham","sohan","harsh"]
// in js arrays are resizeable(add dlt vgra kr skte h )
// arrays can store mix data type number string etc 
//  **interview question arrays in js create shallow copies that is refrence store hota jo changes krenge orginal me bhi chnage hoga**

const y = new Array(2 , 3, 4, 5)


// array methods 
x.push(8,9,10)// to add element in array
console.log(x);

x.pop()// use to remove the last value of array 
console.log(x);

x.unshift(77)// to add value in the starting of array 
console.log(x);

x.shift()// to remove the first element from array 
console.log(x)

x.includes(4)
console.log(x);

console.log(x.includes(4))// array me element hoga to true return krega wrna false

console.log(x.indexOf(8));// index dega elment k and agr element nhi hua to -1 ayega


const newArr = x.join()
console.log(newArr);// result vhi ayega bs type string me change ho jayega


           //**Interview question */
// major difference between slice and splice is 
// splice orginal array change kr deta h but slice orginal array change ni krta 

// SLICE //SPLICE
console.log("a",x);
const n1 = x.slice(1,3)
console.log(n1);
console.log("b" , x);//orginal array me change ni hoga

//splice
console.log("n" , x)
const n2 = x.splice(1,3)
console.log(n2);

console.log("c" , x);// orginal array me chnages honge isme 




