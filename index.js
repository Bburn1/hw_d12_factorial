'use strict'


function getFactorial(n){
    
        if (n===0)
            return 1;
        else if (n <= 0){
            return console.log('n<0');
        }
        else{
            return  n * getFactorial(n-1)

        } 
    

}

console.log(getFactorial(1));