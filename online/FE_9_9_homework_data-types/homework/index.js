const num = 3;
const num1 = 2, num2 = 5, num3 = 8;

/*1*/
function passedParam(someParam) {

    return typeof someParam;
}
console.log(passedParam(null));

/*2*/
let arr = [num1, num2, num3];
const showForEach = el => {
    console.log(el);
}

const forEach = (array, fu) => {
    for (let i in array) {
        if (array[i]) {
            fu(array[i]);
        }
    }
}
forEach(arr, showForEach);

/*3*/
const transArr = el => {

    return el + num;
};

const map = (arr, fu) => {
    let transformedArray = [];

    forEach(arr, el => {
        if (el) {
            transformedArray.push(fu(el));
        }
    });

    return transformedArray;
}
console.log(map(arr, transArr));

/*4*/
function element(el) {

    return el > num;
}
const filter = (arr, fu) => {
    let transformedArray = [];

    forEach(arr, el => {
        if (fu(el)) {
            transformedArray.push(el);
        }
    });

    return transformedArray;
}
console.log(filter(arr, element));

/*5*/
let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
]

function getAdultAppleLovers(data){
    let someFilteredData = filter(data, el => {

        return el.age > 18 && el.favoriteFruit === 'apple';
    });

    let mapData = map(someFilteredData, el => {

        return el.name;
    });

    return mapData;
}
console.log(getAdultAppleLovers(data));

/*6*/
const someArr = {keyOne: 1, keyTwo: 2, keyThree: 3};
let keys = someArr => {
    let keyArr = [];
    for (let key in someArr) {
        if (someArr) {
            keyArr.push(key);
        }
    }

    return keyArr;
}
console.log(keys(someArr));

/*7*/
let values = someArr => {
    let valueArr = [];
    for (let value in someArr) {
        if (someArr) {
            valueArr.push(someArr[value]);
        }
    }

    return valueArr;
}
console.log(values(someArr));

/*8*/
function showFormattedDate(date) {
    let d = date;
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `it is ${d.getDate()} of ${month[d.getMonth()]}, ${d.getFullYear()}`
}
console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));
