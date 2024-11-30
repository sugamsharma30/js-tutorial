//if 
//if(conditon){ agr conditon true h to to scope ke andr jo likha h wo execute hoga 
//  } agr conditon false h to andr ni jayenge 
// if ke block ke bhar jo likah h wo to execute hoga he 
// comparison operator 
// > lessthan
// < greaterthan
// <= less than or equal to 
// >= greater than or equal to 
// == to check equality
// = this asignment operator when we are assiing a value to a variable 
// != not equal
// === isme value and data type dono check hote h  
const score = 200
if(score>100){
    let power ="fly"
    console.log(`user power ${power}`);
    
}
//console.log(`user power ${power}`);// yha pe ye error dega ki power not define because hm isko if block ke scope ke bhar acces kr re h 
                                   // but agr hm power ko var se store krenge to ye chl jayega kyuki var k scope global h jha mrji acces kr lo which not safe .

                                   //nesting
                                   