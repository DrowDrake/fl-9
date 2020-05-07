// Your code goes here

let sideA, sideB, sideC, alfa, angle, square, perimeter, halfOfPerimeter, infoLog, ten = 10;
let degree = 180;
const toInfinityAndBeyond = true;

/*Input data for triangle*/
while (toInfinityAndBeyond) {
    sideA = prompt('input A side: ', 0);
    if (sideA <= 0 || isNaN(sideA)) {
        infoLog = 'wrong input';
        log(infoLog);
    } else {
        break;
    }
}
while (toInfinityAndBeyond) {
    sideB = prompt('input B side: ', 0);
    if (sideB <= 0 || isNaN(sideB)) {
        infoLog = 'wrong input';
        log(infoLog);
    } else {
        break;
    }
}
while (toInfinityAndBeyond) {
    angle = prompt('input angle: ', 0);
    if (angle <= 0 || isNaN(angle)) {
        infoLog = 'wrong input';
        log(infoLog);
    } else {
        break;
    }
}

/*Calculations triangle*/
alfa = +angle * Math.PI / degree;
sideC = Math.sqrt(+sideA * +sideA + +sideB * +sideB - 2 * +sideA * +sideB * Math.cos(+alfa));
perimeter = +sideA + +sideB + +sideC;
halfOfPerimeter = perimeter / 2;
square = Math.sqrt(halfOfPerimeter * (halfOfPerimeter - sideA) * (halfOfPerimeter - sideB) * (halfOfPerimeter - sideC));

/*Display triangle*/
if (Math.floor(sideC * 100) / 100 > Math.floor(sideC)) {
    infoLog = 'Side C: ' + Math.floor(sideC * 100) / 100;
    log(infoLog);
}else if (Math.floor(sideC * ten) % ten > Math.floor(sideC)) {
    infoLog = 'Side C: ' + Math.floor(sideC * ten) % ten;
    log(infoLog);
}else{
    infoLog = 'Side C: ' + Math.floor(sideC);
    log(infoLog);
}

if (Math.floor(square * 100) / 100 > Math.floor(square)) {
    infoLog = 'Square: ' + Math.floor(square * 100) / 100;
    log(infoLog);
}else if (Math.floor(square * ten) % ten > Math.floor(square)) {
    infoLog = 'Square: ' + Math.floor(square * ten) % ten;
    log(infoLog);
}else{
    infoLog = 'Square: ' + Math.floor(square);
    log(infoLog);
}

if (Math.floor(perimeter * 100) / 100 > Math.floor(perimeter)) {
    infoLog = 'Perimeter: ' + Math.floor(perimeter * 100) / 100;
    log(infoLog);
}else if (Math.floor(perimeter * ten) % ten > Math.floor(perimeter)) {
    infoLog = 'Perimeter: ' + Math.floor(perimeter * ten) % ten;
    log(infoLog);
}else{
    infoLog = 'Perimeter: ' + Math.floor(perimeter);
    log(infoLog);
}

function log(infolog) {
    console.log(infolog);
}
