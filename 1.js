function primeNumbers(array){
    let primeArray = [];
    for(var i = 0; i < array.length; i++) {
        let isPrime = true;
        if(array[i] < 2 && array[i] >=0) {
            isPrime = false;
        }else if(array[i] == 2) {
            isPrime = true;
        }else{
            for(var j = 2; j < array[i]; j++) {
                if(array[i] % j == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if(isPrime == true) {
            primeArray.push(array[i]);
        }
    }
    return primeArray;
}

console.log(primeNumbers([1,2,5,3,22]))