const x = ["ram", "kesar","harsh","sugam"]
const y = ["astha", "dipti","dangi" , "mayank"]
x.push(y)
console.log(x);// dono array sath a jayenge but array ke andr ek aur array bn jayega 


// concate to merge to arrays
const z = x.concat(y)
console.log(z);

// to  merge to array we have one more that is spread
const a = [...x, ...y]
console.log(a);


const b = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
//flat can be used to simplfy this above array in a single array 
const c = b.flat(Infinity)// infinity parameter kha tk array ki depth jha tk ek array chaiye 
console.log(c);


console.log(Array.isArray("hitesh"));// dega false kyuki ye array ni h 
// to convert to array 
console.log(Array.from("hitesh"));// ye array bn gya 

let i = 300
let o = 500 
let p = 600
console.log(Array.of(i,o,p));//array of se varaibles ko array bna dia 
