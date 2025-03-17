// default parameterized function

function fun(x = 2){ // x = 2, is the default value.
    return x*x;
}
let result = fun(10); // argument is now given
console.log(result);

// unlimited parameter
function sumOfAllNumbers(x,y){ // two parameter accepted
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}
sumOfAllNumbers(1,2,3);

const b = function(){
    console.log('another way to create a function');
}

b(); // calling the function

const c = function func(){
    console.log('another way to create a function');
}
c(); // calling this function
func(); // --> calling like this --> error



