(function (){
    console.log(`i am IIFE`);
})();

(function (x,y){
    console.log(x + y); // output : 22
})(10,12);

