class addition{
 
    constructor(num1, num2){ // constructor
        this.a = num1; 
        this.b = num2;
        // `a` and `b` are local variable to class `addition`
        console.log("constructr activated");
    }

    add(){
        console.log(`add funtion called`);
        return this.a + this.b; // to access`a` & `b` use `this` keyword
    }
}

const obj = new addition(5,6); // object creation
console.log(obj.add()); // function calling

// constructor - function
function product(n,p){
    this.name = n;
    this.price = p;
}
const p = new product(`nohting p1`, 33000);
console.log(p); // calling the objects itself


class student{
    constructor(m,n){
        this.name = m;
        this.roll = n;
        return {x : 10 , y : 25 };
    }
}

const s = new student(`dip`,1);
console.log(s);

/* in constructor, if we return a `object`, it will return that `object` */ 

const prod = function(n,p)  {  
    this.name = n;
    this.price = p;
}
const t = new prod(`nokia`,5000);
console.log(t); // but using normal function we can  use constructor.

/* static method: 
        1. it only can reside inside a `class`
        2. its usefull when we want to call a method without creating the objects of its class
*/


class bike {
     // these are data members (no need to use let,var,const ..)
     #topSpeed; // `#` is used to make the variable private.
     
     constructor(a){
         // initialization of data members on the time of object creation
         this.#topSpeed = a; // u need to use `#` every time to access private member inside the class
     }
    getTopSpeed(){ // getter method
        console.log(`getting top speed: `,this.#topSpeed);
    }
    setTopSpeed(newTopSpeed){ // setter method
        console.log(`setting top speed`);
        this.#topSpeed = newTopSpeed;
    }
}

const b = new bike(200);
b.getTopSpeed();
b.setTopSpeed(250);
b.getTopSpeed();


