let inputs = process.argv.slice(2);
let result = inputs.map(fl => {return fl[0]})
    .reduce((fl, word) => fl += word.slice(0,1),'');
console.log(result);