let moviename = "The Dark Knight";
var moviename2 = "The 365 Days";
const moviename3 = "The Shawshank Redemption";

console.log(moviename3); 

let rollNo = 123456;
console.log(rollNo);
rollNo = 123;
console.log(rollNo);

let string1 = "Hello"; // String
let string2 = 'World'; // String
let string3 = `Hello World`; // String

let number = 123; // Number
let number2 = 123.456; // Number

let bignumber = 1234567890123456789012345678901234567890n; // BigInt

let boolean = true; // Boolean
let boolean2 = false; // Boolean

// objects
const student = {
    name: "John",
    age: 23,
    rollNo: 123456,
    nestedObject: {
        name: "Nested Object",
    },
};
console.log(student);

// symbols
const sym1 = Symbol("Hello");
const sym2 = Symbol("Hello");
console.log(sym1 === sym2); // false because symbols are unique


// Operators

// Arithmetic operator
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2); // quotient
console.log(10 % 2); // remainder
console.log(10 ** 2); // power operator --> 10**2 = 10^2

// Assignment operator
let x = 10; // the equalTo operator assigns value from right to left
x += 10; // x = x + 10
x -= 10; // x = x - 9
x *= 2; // x = x * 2

//comparision operator --> [ result -> boolean ]
let m = 9;
let n = 4;
console.log(m > n);
console.log(m >= n);
console.log(m < n);
console.log(m <= n);

// == and === operator

// logical opertor

//and --> && , or --> || , not --> !
console.log(true && false); // --> false
console.log(10 || 0); // --> false -> due to 0 (false)  

// bitwise operator
// bitwise and --> &
console.log(5 & 7); // 5 -> 0101, 7 -> 0111 ]--> 5 & 7 = 0101 i.e. (5)

//bitwise or --> |
console.log(5 | 7); // 5 | 7 = 0111 i.e. (7)

//bitwise not --> ~
console.log(~5); // -(n+1)


// conditionals
let marks = 90;
if(marks > 85){
    console.log("this student iss topper");
}
else{
    console.log("not one");
}


// loop
//for loop

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// while loop
let j = 0;
while(j <= 10){
    console.log(j);
    j++;
}

// functions

function addTwoNum(){ // func defination
    console.log("hello");
}
addTwoNum(); // func call


// parameterized function
function isOddOrEver(x){ // it takes x as a parameter
    if(x % 2 == 0) console.log("its even");
    else console.log("its odd");
}
isOddOrEver(4);

// return value from a function
function addNumber(x , y){
    let result = x + y;
    return result;
}
let temp = addNumber(10,20);
console.log(temp);