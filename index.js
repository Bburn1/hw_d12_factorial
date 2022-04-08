'use strict'


function getFactorial(n){
    for (let i = 0; i<n; i++){
        if ((n === 1) || (n===0))
            return n;
        else{
            return  n * getFactorial(n-1)

        } 
    }

}

console.log(getFactorial(8));