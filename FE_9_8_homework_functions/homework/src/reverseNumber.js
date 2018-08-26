function reverseNumber(number) {
    const ten = 10, one = -1;
    let result = 0;
    if (number < 0) {
        number *= one;
        for(; number; number = Math.floor(number / ten)) {
            result *= ten;
            result += number % ten;
        }

        return console.log(-result);
    } else {
        for(; number; number = Math.floor(number / ten)) {
            result *= ten;
            result += number % ten;
        }

        return console.log(result);
    }
}

reverseNumber();
