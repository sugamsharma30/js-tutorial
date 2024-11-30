// execution context
// sbse phele global execution context bnata jha pe this ko rkh dia jata h 
// browser me exceutiion context alg hota h and node me alg 
// browser me exceution context hota h windows 
// java script is singlethreaded isme hr cheej process hoti h 

     //EXECUTION CONTEXT IN JS

//global exectution context 
// function execution context 
// eval exectuion context = it is the property of global execution context 
     
    // TO UNDERSTAND EXECTUION CONTEXT 
     // take an example 
     let val1 = 10 
     let val2 = 5
     function addnum(num1 , num2){
        let total = num1+num2
        return total
     }
     let result1 = addnum(val1,val2)
     let result2 = addnum(10 ,2)
    
     
     
    
     //steps of exectution 
     //1  global exectuton = this keyword jayeg a
     //2 MEMORY PHASE = // val 1 = undefined
                        // val 2 = undeined
                        // addnum = defination of function 
                        // result 1 = undefined
                        // result 2 = undefined
    //3 EXECUTION phase = // val 1 = 10
                         //   val 2 = 5
                         // add num function 
                         // result 1 = iske liye "new variable enviroment +execution thread bnega" jha pe function k exectution bhi hoga
                         // result 2 =  result1 ke bad iske liye "new variable enviroment +execution thread bnega" jha pe function k exectution bhi hoga
    // 4 NEW VARIABLE ENVIROMENT + EXECUTION THREAD(RESULT 1 )                                   
    // 4 a = MEMMORY PHASE // VAL1 = undeifned 
                           // val2 = undefined 
                           // total = undefined
    // 4 b = EXECUTION PHASE // num1 = 10
                             // num2 = 5 
                             // total = 15
     // "yha se total ki value result1 me chli jayegi aur global execution me poch jayegi"
    // 5 NEW VARIABLE ENVIORMENT + EXECUTION THREAD(RESULT 2 )
    // 5A = MEMORY PHASE //val1 = undefined 
                         //val2 = undefined
                         //total = undefined
    // 5b = EXECUTION PHASE // num1 = 10
                            // num2 = 2
                            // total = 12
    // "yha se total ki value result2 me chli jayegi aur vha se global scope me"                                                                       