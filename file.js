console.log("Develop a Node.js program to perform asynchronous file operations using the \
fs module.");
import fs from "fs";
fs.writeFile("test.txt", "Hello Sai", function(err) {
    if (err) throw err;
    console.log("File created");
    fs.readFile("test.txt", "utf8", function(err, data) {
        if (err) throw err;
        console.log(data);
    });
});
