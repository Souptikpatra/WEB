// rest and spread both uses (...) three dots

// rest
function sum(a,b,c,...other){ // rest of the element will store in this array <other>
    console.log(other); // output: [4,3]
    console.log(a+b+c+other[0]+other[1]); // output: 2+2+2+4+3 = 13
}
sum(2,2,2,4,3);

// spread
function add(a,b,c){
    console.log(a+b+c);
}
let arr = [1,2,3];
add(arr[0],arr[1],arr[2]); // passing array element invitually --> without spread


add(...arr); // passing array element invitually --> using spread.
            // here array elemets are get spread (separeted) in 
            // indivitual element. thats why, add() function receives
            // 3 distinct number from array, in form of argument.