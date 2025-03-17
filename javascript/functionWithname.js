let a = function fun(){
    console.log(`hi`);
}
a; // no output --> nothing happens
console.log(a); // output : [Function: fun]
a(); // function call --> output : hi
 // fun(); // error --> fun is not defined
 // console.log(fun); // error --> fun is not defined

let b = function(){
    console.log("i am fnc");
}
b(); // function call


