//(function (exports, require, module, __filename, __dirname){ })()


const print = message => {
    console.log(message);
}

console.log(module);

//export const printMessage = print;
exports.printMessage = print;
