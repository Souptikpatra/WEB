// HOF --> Higer Order Function 
//     --> function as an argument to another function

function f(x, fn){
    // x  --> number
    // fn --> a function
    console.log(`i am f: `+ x);
    fn();
}

f(10, function exec(){ // exec is a callback function
    console.log(`i am fn`);
}) // calling `f` , inside `f`, theres was 10 as value and exec as a function.


// example of HOF
let arr = [1,10,9,100,1000,11,12,13,14,2,3]; // unsorted array
arr.sort(); // it sorts the given array, [expextation]

console.log(arr); // output:  [1, 10, 100, 1000, 11, 12, 13, 14, 2, 3, 9]

// this doesnot seem, that sorting has done ..
//default implementation of .sort() function is --> to sort the array in lexographical order

/*
0 -> A
1 -> B
2 -> C
3 -> D
4 -> E
5 -> F
6 -> G
7 -> H
8 -> I
9 -> J
.........
given array : [1,10,9,100,1000,11,12,13,14,2,3]
convert :    [B,BA,J,BAA,BAAA,BB,BC,BD,BE,C,D]
Sort lexo:   [B,BA,BAA,BAAA,BB,BC,BD,BE,C,D,J]
number rep:  [1,10,100,1000,11,12,13,14,2,3,9]
*/


let nexarr = [1,10,9,100,1000,11,12,13,14,2,3];
nexarr.sort( // sort function is a HOF --> takes a comparator function as argument
    function(a,b){
            /*
                if a<b --> a-b will be -ve --> if cmp function gives -ve, then a is placed before b
                if a>b --> a-b will be +ve --> if cmp function gives +ve, then b is placed before a
            */

        return a-b;
    }
)
console.log(nexarr);
