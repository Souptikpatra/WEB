const myPromise = new Promise(function(resolve, reject){
    /*      
            1. This callback function expects two arguments: `resolve` and `reject` (names can be changed).
    
            - `resolve` and `reject` are two functions provided by ES6, which can be invoked at any time 
              within the function body.
              
            - Calling `resolve()` → Immediately transitions the Promise from the **pending** state to the **fulfilled** state.
              
            - Calling `reject()` → Immediately transitions the Promise from the **pending** state to the **rejected** state.
              
            - If neither function is called, the Promise remains in the **pending** state indefinitely.
    
            2. Inside this function, we can write any time-consuming (asynchronous) or non-time-consuming (synchronous) tasks.
    */
    });


function getRandomInt(max){ // random number generator
  return Math.floor(Math.random() * max);
}

// promise creation
function createPromiseWithTimeout(){ 
  return new Promise(function executer(resolve,reject) {
    console.log(`entering the executer callback in the promise constructor`);
    setTimeout(function(){ // async code
      let num = getRandomInt(10); 
      if(num % 2 == 0){
        // if the random number is even then we fullfill
        resolve(num);
      }
      else{
        // if the random number is odd then we reject
        reject(num); 
      }
    },5000);
    console.log(`exitting the callback executer`)
  });
}

console.log(`starting...`);
const p = createPromiseWithTimeout();
console.log(`we are now waiting for the promise to complete`);
console.log(`current promise object state: `, p);

// consuming a promise
p
.then( // then method takes 2 function (1) fullfillHandler (2) rejectionHandle
  function fullfillHandler(value){console.log(`inside fulfillHandler with value: `,value);},
  function rejectionHandler(value){console.log(`inside rejectionHandler with value`,value);}
)