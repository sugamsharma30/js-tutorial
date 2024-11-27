const score = 400 // kiska data type hoga number 
// in js we can also exclusively define ki data type number he aye
const x = new Number(100)
console.log(score)// output dega 400 
console.log(x);// output dega = Number(100) isk ahmne tyoe exclusivley define kia h number he hoga 

// to chnage in string = jis se hmre pas additional property bhi a jati h  
console.log(x.toString());// output me 100 he ayega but type string hogya ab 
console.log(x.toString().length);// length de dega out me 100 ki = 3 

// to fix . ke bad kitne numbers chaiye 
console.log(x.toFixed(2))// integer ke bad . places tk decimal value ayegi 


// to precsion is used for integer ki kinte places tk number chaiye 
let y = 345.78
console.log(y.toPrecision(4));// output me 3 he digits ayenge round off vgra krke = output wil be 346

// to count the number of zeros  the number will return with commas 
        //tolocaleString()
const z = 100000
console.log(z.toLocaleString('en-IN'));// 'en-IN likhne se indian value ke hisab se result ayega



//*************MATHS*************=
// it is lib which comes in java script 
console.log(Math);// it is a object in js 
1 // abs = to have a absolute value negative value will be chnaged in postive  and postive will remain postive 
console.log(Math.abs(-4));// output 4 
2 //round
console.log(Math.round(5.67));// use to  round off the value 
3 //ceil = round off ke time pe upper value he lega 
console.log(Math.ceil(5.4));//output 6 
4 // floor = round off ke time pe choti value leg a
console.log(Math.floor(2.3));// output ayega 2 
5 // sqrt to find square root
console.log(Math.sqrt(50625));
6 // min to find the minimum vlaue 
console.log(Math.min(40000000000,555555555556, 345677777777777777776,222222222223434, 6777777));
7 // max to find the maximum vlaue 
console.log(Math.max( 4, 5, 67 , 89 ));

        //****random ***/
// isme values hmesa 0 aur 1 ke beech me he ati h 
console.log(Math.random());
console.log((Math.random()*10)+1);

// when we need values greater than some number 
const min = 10 
const max = 40 
console.log(Math.floor(Math.random() * (max-min+1)) + min);//ab jo value h wo 10 se 40 ki range me ayengi and 10 sw choti ni hogi 






