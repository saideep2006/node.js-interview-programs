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
