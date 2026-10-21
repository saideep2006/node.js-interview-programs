console.log("Develop a Node.js program to execute functions asynchronously using setTimer timers");
import EventEmitter from "events";
const e = new EventEmitter();
const a = setTimeout(()=>
{
    e.on("first",(party)=>
    {
        console.log(`I will vote for ${party}`);
    });
    e.emit("first", "TDP");
}, 3000);
