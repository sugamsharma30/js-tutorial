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



// project 3 = digital clock
const clock = document.querySelector('#clock')
 setInterval(function(){
   let date = new Date()
   clock.innerHTML = date.toLocaleTimeString()
 },1000)
//  explaination of project 
// sbse phele clock select kia 
// set interval event lgaya h jis se clock continue chlti rhe syntax h setInterval(fucntion(){},1000)
// 1000 isliye likha ki time hr second change ho 
// iske bad date method se date lenge 
// inner html se toLocaleTimeString se exact time and continue chlta rhega


//project 4 = guess number 
//  overview of project
//  guess the number  ek random number genrate krenge sbse phele jisko guess krne ke liye 10 attemptrs honge hmre pas and jitne bhi hm guess krenge wp bhi hme show honge  jo remaining guesses bche h jese strating me 10 guess the bhi phir ek ek krke kmhote chlenge guesses 
//   queryselctor me lene wali chije  = form h form ke andr (1) guess field h guess a number krke (2) phir ek input h jha se values nikal lenge (3) submit button h isko bhi lena pdega (4) phir previous guesses wo bhi lenge (5)  gusses remaining ye bhi lena pdega  

// step 1 genrate a random number jo 1 se leke 100 tk number de parseint isliye use jis se integer mile hr bari 
let randomNumber = parseInt(Math.random()*100+1)

// step 2 sari values lo queeryselector me
// jisko id se slect usme # use krenge baki me class se jisko select krenge usme . use krenge  
const submit = document.querySelector('#subt')
// guess field ki value .value krke ayegi jo hm badme le lenge 
const userInput = document.querySelector('#guessField') 
// guessslot jo previous guesses h 
const guessslot = document.querySelector('.guesses')
// remaining mtlb kitne guesses bche huye h 
const remaining  = document.querySelector('.lastResult')
// low or high ki jo value hmne guess kri h wo exact value se low h ki high h 
const lowOrHigh  = document.querySelector('.lowOrHi')
//  fresh start ke liye
const startOver  = document.querySelector('.resultParas')


// step 3 = ek paragraph create krenge 
 const p = document.createElement('p')
// prev guess array hoga jo ki user ko btaye ki usne kya kya guess kr lia 
let prevGues = []
// kitne attempt le liye usne
let numGuess = 1
 let playGame = true 
//  agr game khel re h to event use krenge 
// /click and form k default action rokenge jo wo server me submit ho jata h 
 if(playGame){
   submit.addEventListener('click' , function(e){
     e.preventDefault()
    //  ab jo input dega user usko lenge .value krke 
   const guess = parseInt(userInput.value)
  //  ab isko direct pass krdenge ki iska kam khtm ab isko validate kro 
  validateGuess(guess)
   })
 }

// step 4 logic likhnge differnet fucntions use krke 
// 1 validate guess ki jo number guess kia  h wo valid h ki ni h 
function validateGuess(guess){
  if(isNaN(guess)){
    // yha pe alreat lga denge jis se wo msg a jayega 
    alert('please enter a valid number')
  }else if(guess < 1){
    alert('please enter a number more than 1')
  }else if(guess > 100){
    alert('please enter a number less than 100')
  }
  // ita kam hone ke bad jo number usne guess kia sbse phele usko push krdo usme previousguesses walle array or agr ye uska last atttempt to mesaage display aur displayguess function ko call kr do
  else{
    prevGues.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`game over , random number was ${randomNumber}`) 
      // end game bhi kr do 
      endGame()
    }
    // ab ek aur  else ki wo jo attempt lia usne wo last value nhi thi wo last guess ni th a
    else {
      // displayguess cleanup hoga 
      displayGuess(guess)
      // checkguess me check hoga ki random value ke brabar h ki ni 
      checkGuess(guess)
    }

  }
}


// check guess jo number guess kr re h wo low h exact value se ki high ki same h 
 function checkGuess(guess){
   if(guess === randomNumber){
     displayMessage(`you guessed it right `)
     endGame()
   }else if(guess < randomNumber){
     displayMessage(`number is low`)
   }else if(guess > randomNumber){
    displayMessage(`number is high `)
  }


 }
 
//  display guess jo values ko clean krega aur previous guess remaing guess ko update krega
function displayGuess(guess){
  // ye trha se clean krega 
  // inputvalue ko khali krega 
  userInput.value = ''
  // kitne guesses hogye ye update hota rhe and numguess ko bdhate chle 
  guessslot.innerHTML += `${guess},  `
  numGuess++;
  // remaning values calculate krna
  remaining.innerHTML = `${11 - numGuess}`

}

//  dispalay message ki message kya display krwana h 
function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">start new game </h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()


  

}
function newGame(){
 const newGameButton =  document.querySelector('#newGame')
 newGameButton.addEventListener('click' , function(){
   randomNumber = parseInt(Math.random()*100+1)
   prevGues = []
   numGuess = 1
   guessslot.innerHTML = ''
   remaining.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame = true 

 })
  


}
