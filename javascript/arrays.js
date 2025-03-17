// intro
let arr = [1, 2, 3, 4];
console.log(arr);

//  in JS array is hetrogenious, i.e. it can store different type of data in a single array.
let x = ["souptik", 1,2,3,4, false, 2.9];
console.log(x); 

//anpther way
let colors = Array("black", "red", "blue");
console.log(colors);

// make a array (giving initial size)
let a = new Array(10);
console.log(a);  // expected output: [ <10 empty items> ]

//indexing

//index: 0  1  2  3
let X = [10,20,30,40];
console.log(X[1]); // o/p: 20
console.log(X[100]); // o/p: undefined

// updating array element
X[2] = 4;
console.log(X); // [ 10, 20, 4, 40 ]
// we can even update with a hetrogenous value as well
X[1] = "souptik";
console.log(X); // [ 10, 'souptik', 4, 40 ]
X[3] = false;
