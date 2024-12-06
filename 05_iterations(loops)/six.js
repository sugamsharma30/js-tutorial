const coding = ["sugam ", "harsh","kesar" , "harshit"]
const vaues = coding.forEach( (item) =>{
    console.log(item);
    return item
    

})
console.log(vaues);// to for each loop kuch return ni krega 

// now to return vlaues in above example we will use filter
//const x = [1,2,3,4,5,6,7,8,9,10]
// filter be ek call back function deta h agr condtion true to return kr dega
//const y = x.filter( (nums) =>{// agr hm scope denge to return likhna pdega scope dena mtlb currly braces use krna {}
  //   return nums>4} ) // is exmple me we are using arrow function as a call back function 
//console.log(y);  // simply filter condtion check krega and shi hogi to values return kr dega                      
//{} scope open krte h to return key word likhna pdega wrna nhi to ni likhna pdega 


/*// returing value through for each bs usme ek cheej krni pdegi ek empty array bnana pdega 
const x = [1,2,3,4,5,6,7,8,9,10] 
const y =[]
x.forEach((values) =>{
    if(values>4){
        y.push(values)
    }
} )
console.log(y);*/


// other filter exaples

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => { bk.genre === 'history'
                return bk
  })

  //userBooks = books.filter( (bk) => { 
    //return bk.publish >= 1995 && bk.genre === "History"
//})
  console.log(userBooks);

