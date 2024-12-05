// for each loop 
const x = ["harsh" , "sugam", "harshit" , "kesar"]
// for each loop ko as a call back function use krenge 
x.forEach(function (item){  // normal jese function bnate h vese he bs call back function h to nam ni denge function k 
     //console.log(item);
                            // item(hm item ki jgha koi bhi nam rkh skte h ) hmne array ki elments ko denote ki a h

}) 
 // we can also use this in arrow function 
 x.forEach(  (item)  =>{
    //console.log(item); // isme bhi values print ho jayenge 
    


 })
  // alg se function se likha  h 
  function u(item){
   // console.log(item);
    

  }
  x.forEach(u)// to ese bhi ye chl jayega

// to acces everything throug for each 
x.forEach(function (item, index , arr) {
    console.log(item, index , arr); // ye value dega uska index aur hr value ko array k access hoga
    

})

// object inside array and using of loop 
const coding = [
    {
        lan : "java",
        lanf : "java2"
    },
    {
        lan : "python",
        lanf : "py"
    },
    {
        lan : "html ",
        lanf : "css"
    },
]
coding.forEach(function(item){
    console.log(item);
    console.log(item.lan);// is se sirf lan wala ayega 
    console.log(item.lanf);// is se sirf lanf jo h wo ayega 
    
    
    

})
   
