console.log("Develop a Node.js program to establish a connection with MongoDB and display \
a successful connection message.");
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

client.connect()
    .then(() => {
        console.log("MongoDB connected successfully");
        client.close();
    })
    .catch(err => console.log(err));
