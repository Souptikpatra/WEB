function fun(){
    console.log(teacher); // not throw an error (just says: undefined --> as value of techer is unkown)
    var teacher = "dip"; // it has function scope (accessible everywhere in function, even before declaration)
    console.log(student); // give a error (accessing before declaration)
    let student = "putu"; // it has a block scope (accessible in entire block, but below of its declaration).
    if(student == "putu"){
        console.log(teacher,student);
    }
    console.log(teacher);
    console.log(student);
}
if(2 == 2){
    console.log(x);
    var x = 12;
    // console.log(y);
    let y = 10;

    console.log(x);
    console.log(y);
}