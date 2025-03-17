let arr = [10, 11, 16, 14];

arr.push(15); // inserts element at last : [output] -> [10, 11, 16, 14, 15]
arr.pop(); // removes element from last: [output] -> [10, 11, 16, 14]
arr.shift() // removes element from first: [output] -> [11, 16, 14]
arr.unshift(10); // inserts element from first: [output] -> [10, 11, 16, 14]


// --------------------------------------
// concat() method
let a1 = [1,2,3,4];
let a2 = [5,6,7,8,9];

let result = a1.concat(a2);  // concats two array
console.log(result); // output: [1,2,3,4,5,6,7,8,9]

// ---------------------------------
// slice() method
let a = [1,2,3,4,5,6,7,8];
let s = a.slice(2,5); // fetches index : [2,5)
console.log(s); // [ 3, 4, 5 ]
console.log(a); // [1,2,3,4,5,6,7,8] --> does not change the original one

// -------------------------------
//join() method
let t = [1,2,3,4,5,6];
let str = t.join(); // joins the given array in form of 'string' separated by given parametr
console.log(str); // [o/p] : 1,2,3,4,5,6  (default)
let str2 = t.join('-')
console.log(str2); // [o/p] : 1-2-3-4-5-6

// --------------------------
// reverse() method
let x = [1,2,3,4];
x.reverse();
console.log(x); // [o/p] : [ 4, 3, 2, 1 ]

// --------------------------
// linear search
let y = [1,2,3,4,5];
console.log(y.indexOf(3)); // [o/p] : 2

// ------------------------------
// splice() method
let z = [1,2,3,4,5,6];
// syntax: array.splice(startIndex, deleteCount, i1,i2,i3 ..)
let removed = z.splice(2,3,0,0,0);
console.log(z);
// splice also returns the removed element in form of array
console.log(removed);