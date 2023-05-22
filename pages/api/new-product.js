import { MongoClient } from "mongodb";
import { _id } from "@next-auth/mongodb-adapter";
import { ObjectId } from "bson";
// import ObjectID from "bson-objectid";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sakodatabase:EYmcsgXd4txjPb9L@cluster1.ksjs9y2.mongodb.net/products?retryWrites=true&w=majority"
    );

    const db = client.db();
    const productsCollection = db.collection("products");
    const result = await productsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Data sent to the server.." });
  }
  if (req.method === "DELETE") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sakodatabase:EYmcsgXd4txjPb9L@cluster1.ksjs9y2.mongodb.net/products?retryWrites=true&w=majority"
    );
    const db = client.db();
    const productsCollection = db.collection("products");
    // const result = await productsCollection.deleteOne(data);
    // const result = await productsCollection.deleteOne({ _id: dataid });
    const result = await productsCollection.deleteOne(data.id);

    client.close();
    res.status(201).json({ message: "Data deleted from the server.." });
  }
}

export default handler;
