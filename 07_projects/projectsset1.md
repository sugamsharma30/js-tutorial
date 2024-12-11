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
