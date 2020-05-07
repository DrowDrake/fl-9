import Modules_Default_Math from './modules_default_export_math';

let arg1 = process.argv[2];
let arg2 = process.argv[3];

console.log(Modules_Default_Math.PI);
console.log(Modules_Default_Math.sqrt(+arg1));
console.log(Modules_Default_Math.square(+arg2));
