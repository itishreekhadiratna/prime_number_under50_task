console.log('test called');
var inputValue = 50;
var primeNumber = [];
var nonPrimeNumber = [];
for (var i = 2; i < inputValue; i++) {
    var count = 0;
    for (var j = 1; j  <= inputValue/2; j++) {
        if (i % j == 0) {
            count = count + 1;
        }
    }

    if (count > 2) {
        primeNumber.push(i);
    }
    else
    {
        nonPrimeNumber.push(i);
    }


}

    console.log(primeNumber);
    console.log(nonPrimeNumber);
