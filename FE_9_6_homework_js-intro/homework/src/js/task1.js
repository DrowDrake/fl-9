let inputPrice, inputDiscount, infoLog, ten = 10;
const toInfinityAndBeyond = true;

while (toInfinityAndBeyond) {
    inputPrice = prompt('Input price', 0);
    if (inputPrice <= 0 || isNaN(inputPrice)) {
        infoLog = 'Wrong input';
        log(infoLog);
    } else {
        break;
    }
}

while (toInfinityAndBeyond) {
    inputDiscount = prompt('Input discount', 0);
    if (inputDiscount <= 0 || isNaN(inputDiscount)) {
        infoLog = 'Wrong input';
        log(infoLog);
    } else {
        break;
    }
}

    let saved = inputPrice * inputDiscount / 100;
    let priceWithDiscount = inputPrice - saved;

    if (Math.floor(priceWithDiscount*100)/100 > Math.floor(priceWithDiscount*ten)/ten) {
        infoLog = 'Price: ' + Math.floor(inputPrice*ten)/ten +
            '\n' + 'Discount: ' + Math.floor(inputDiscount*ten)/ten +
            '\n' + 'Saved: ' + Math.floor(saved*ten)/ten +
            '\n' + 'Price with discount: ' + Math.floor(priceWithDiscount*100)/100;
    log(infoLog);
    } else if(Math.floor(priceWithDiscount*ten)/ten > Math.floor(priceWithDiscount)){
        infoLog = 'Price: ' + Math.floor(inputPrice*ten)/ten +
            '\n' + 'Discount: ' + Math.floor(inputDiscount*ten)/ten +
            '\n' + 'Saved: ' + Math.floor(saved*ten)/ten +
            '\n' + 'Price with discount: ' + Math.floor(priceWithDiscount*ten)/ten;
    log(infoLog);
    } else {
        infoLog = 'Price: ' + inputPrice +
            '\n' + 'Discount: ' + inputDiscount +
            '\n' + 'Saved: ' + saved.toFixed() +
            '\n' + 'Price with discount: ' + priceWithDiscount.toFixed()
    log(infoLog);
    }

function log(infoLog) {
    console.log(infoLog);
}
