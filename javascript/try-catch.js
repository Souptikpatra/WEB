
function isEven(x){
    try{ // write the risky code inside try block
        if(x % 2 == 0) console.log("true");
        else console.lo("false"); // in this line error can occur if  x --> odd

        console.log("ended"); // it will not execute if x --> odd
    } 
    catch{ // it will execute only if theres a error in `try` block
        console.log(`handled`);
    }

    finally{ // this code will alaways execute whatever, in previous 'try' executed or 'catch'
        console.log(`finally`);
    }
}

isEven(10); // output: true
            //         ended
            //         finally

isEven(11); // output: handled
            //         finally
