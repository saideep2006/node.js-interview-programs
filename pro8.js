console.log("Develop a Node.js program to transfer data using Readable and Writable Streams.");

import fs from "fs";

let read = fs.createReadStream("input.txt");
let write = fs.createWriteStream("output.txt");

read.pipe(write);

console.log("Data transferred successfully");
