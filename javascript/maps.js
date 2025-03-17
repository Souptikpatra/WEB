const Mymap = new Map(); // map created

// adding key-value pairs
Mymap.set("name","souptik");
Mymap.set("age",22);
Mymap.set("address","howrah");
console.log(Mymap);

// Check if a specific key exists
console.log(Mymap.has("age")); // expected : true
console.log(Mymap.has("dept")); // expected : false 

// Retrieve the value associated with a given key
console.log(Mymap.get("address")); // expected : howrah


// Iterate through all key-value pairs.
for(let keys of Mymap.keys()){
    console.log(`${keys} --> ${Mymap.get(keys)}`);
}

