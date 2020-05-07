function *upper (items) {

    for (let item of items) {
        try {
            yield item.toUpperCase();
        } catch (e) {
            console.log(null);
        }
    }
}

var bad_items = ['a', 'B', 1, 'c'];

for (let item of upper(bad_items)) {
    console.log(item);
}
// want to log: A, B, null, C

