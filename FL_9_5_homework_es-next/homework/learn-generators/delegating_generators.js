function *flat (arr) {
    let fl1 = [].concat.apply([], arr);
    let fl2 = [].concat.apply([], fl1);
    yield* fl2;
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6
