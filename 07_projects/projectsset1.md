# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

// project 1 (java script)
// project = jis button pe click kre usi color ki body bn jaye
// step 1 = sbse phele button select krenge  
 const buttons = document.querySelectorAll('.button')
//  step 2 = boduy select krenge 
 const body = document.querySelector('body')
//  step 3 = buttons me hme nodelist milti h to for each lga skte h
buttons.forEach(function(button){
  // console.log(button)
  // step 4 = hr button me event listener(click k ) lgayenge kyuki koi chaiye bhi jo event ko sune  
  // events lgange k tarika
  // bhot sare events hote h jese mouse click , page refresh krna and soo on
  // click ke bad ek call back function  hogya ki click krne ke       bad  respond kya krna h  (e sirf nam h jo hmne dia h )
  button.addEventListener('click',function (e) {
    // e console krane se ye jayega ki mouse event h 
    console.log(e);
    // e.target mtlb kis target se event aya h 
    console.log(e.target);
    // step 5 = e.target se wo colour a jayega jis pe click kr re h 
    // ab simply if else lga ke ki e.target.id agr yellow ho to body k style color yellow kr do and so on 
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }else if (e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }else{
      body.style.backgroundColor = 'yellow'
    }

  })
  



})





// project 2 
// step 1 = form selct krenge sbse phele 
const form = document.querySelector('form')

// step 2 = form server me get y post ke throughs submit hota h to eevnt lga ke ke default action rokna h form k kyuki hme form server pe submit ni krna ,Event listner is bari submit h kyuki value submit hongi values

form.addEventListener('submit', function(e){
  e.preventDefault()
  // step 3 me height aur weight ki value select krenge jo value milegi wo string hogi to usko "praseInt" lga ke change kr lenge aur selct ke bad ".value" likhnge jis se value a jaye 
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').
value)
// step 4 result bhi select kr lo 
const results = document.querySelector('#results')
//  step 5 = checks lgayenge on height or weight pe 
// agr height empty  string or 0 se km h 0r not a number h to return me text mil jaye please give a valid height 
if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = 'please give a valid  height'
}
//  agr weight empty string or 0 se km h 0r not a number h to return me text mil jaye please give a valid weight 
else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = 'please give a valid  weight'
}
// step 6 height k format bhi theek h weight k format bhi theek h to calculate kro bmi 
else{
  // toFixed(2) use kra h jis se decimal ke bad 2 places tk mil jaye 
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  // step 7 = show this bmi in result result me bmi add krna h jo inner hmtl ke through kr denge
  // span age project me kam isliye use kia h bs normal tarke se bhi bmi add kr skte backtix lga ke sirf 
  results.innerHTML = `<span>${bmi}</span>`

}

})

// project 2
// step 1 = form selct krenge sbse phele 
const form = document.querySelector('form')

// step 2 = form server me get y post ke throughs submit hota h to eevnt lga ke ke default action rokna h form k kyuki hme form server pe submit ni krna ,Event listner is bari submit h kyuki value submit hongi 

form.addEventListener('submit', function(e){
  e.preventDefault()
  // step 3 me height aur weight ki value select krenge jo value milegi wo string hogi to usko "praseInt" lga ke change kr lenge aur selct ke bad ".value" likhnge jis se value a jaye 
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').
value)
// step 4 result bhi select kr lo 
const results = document.querySelector('#results')
//  step 5 = checks lgayenge on height or weight pe 
// agr height empty string or 0 se km h 0r not a number h to return me text mil jaye please give a valid height 
if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = 'please give a valid  height'
}
//  agr weight empty string or 0 se km h 0r not a number h to return me text mil jaye please give a valid weight 
else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = 'please give a valid  weight'
}
// step 6 height k format bhi theek h weight k format bhi theek h to calculate kro bmi 
else{
  // toFixed(2) use kra h jis se decimal ke bad 2 places tk mil jaye 
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  // step 7 = show this bmi in result result me bmi add krna h jo inner hmtl ke through kr denge
  // span age project me kam isliye use kia h bs normal tarke se bhi bmi add kr skte backtix lga ke sirf 
  
  if(bmi<18.6){
    results.innerHTML = `under weight${bmi}` }
  else if(bmi >= 18.6 && bmi <=24.9){
  results.innerHTML = `normal weight${bmi}`


}else{
  results.innerHTML = `overweight${bmi}`
}

}})
