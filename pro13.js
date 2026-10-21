console.log("Develop a Node.js program to perform CRUD operations on a MongoDB collection \
using the MongoDB driver.");

import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function main() {
    await client.connect();

    const db = client.db("college");
    const collection = db.collection("students");

    // Create
    await collection.insertOne({ name: "Sai", age: 20 });
    console.log("Data inserted");

    // Read
    console.log(await collection.find().toArray());

    // Update
    await collection.updateOne(
        { name: "Sai" },
        { $set: { age: 21 } }
    );
    console.log("Data updated");

    // Delete
    await collection.deleteOne({ name: "Sai" });
    console.log("Data deleted");

    await client.close();
}

main();
