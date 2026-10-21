console.log("Develop a Node.js program to handle events using the EventEmitter class and \
custom event listeners.?");
import chalk from 'chalk';
import EventEmitter from "events";
const e = new EventEmitter();
e.on("exam", ()=>
{
    console.log(chalk.green("I am Chaithanya Sai"));
});
e.emit("exam");
