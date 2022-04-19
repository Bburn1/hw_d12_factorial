'use strict'


function getFactorial(n){
    
        if (!n)
            return 1;
        else if (n <0){
            return 'n<0'
        }
            return  n * getFactorial(n-1)
        } 
    



console.log(getFactorial(6));