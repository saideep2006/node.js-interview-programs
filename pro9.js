console.log("Develop a Node.js program to copy a text file using Streams.");

import fs from "fs";

let read = fs.createReadStream("input.txt");
let write = fs.createWriteStream("copy.txt");

read.pipe(write);

console.log("File copied successfully");
