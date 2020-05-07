var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if(val !== '') args.push(+val);
    });
});

let avg = (...args) => {
    return args.reduce((avg, arr) => (avg + arr)) / args.length;
};

console.log(avg(...args));
