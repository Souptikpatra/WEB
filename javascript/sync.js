/* console.log(`hi`);
for(let i = 0; i < 10000000; i++){ // most time taking piece of code
    if(i == 5000) console.log(`hi 2`);
}
console.log(`hi 3`);

*/

/*
output: hi
        hi 2
        hi 3
    this shows JS is stick to execute the most time taking code
    also.
*/

console.log(`hii`);
setTimeout(function(){console.log(`done`)},5000); // time consuming task(takes 5sec)
console.log(`bye`);

