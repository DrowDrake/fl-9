function isPrime(number) {
    let temp = Math.round(Math.sqrt(number));
    for (let i = 2; i < temp + 1; i++) {
        if (number % i === 0) {

            return false;
        }
    }

    return true;
}

isPrime();
