console.log("Develop a Node.js program to parse URLs and extract query string parameters");

import url from "url";

let u = new URL("https://example.com?name=Sai&branch=CSE");

console.log("Name:", u.searchParams.get("name"));
console.log("Branch:", u.searchParams.get("branch"));
