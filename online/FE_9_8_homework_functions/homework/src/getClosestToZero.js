function getMin(...arg) {
    let arr = [...arg];
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (Math.abs(arr[i]) < Math.abs(temp)) {
            temp = arr[i];
        }
    }

    return temp;
}

getMin();
