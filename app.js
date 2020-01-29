// import { printMessage } from './hello-world';
// printMessage('Welcome to the node world');

//Hello World
// var helloWorld = require('./hello-world');
// helloWorld.printMessage('Welcome to the node world');

//OS
const os = require('os');
//console.log(os);

console.log(`No. of CPUs in this lappy are ${os.cpus().length}`);

os.cpus().map(cpu => {
    console.log(`CPU Model: ${cpu.model} with speed: ${cpu.speed}`);
});


console.log(`this systems user name is : ${os.userInfo().username}`);
console.log(`this systems name is : ${os.hostname()}`);
console.log(`this system has free memory of: ${os.freemem()} bytes`);