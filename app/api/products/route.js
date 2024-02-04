import { connectDb } from "@dbConfig/db";
import Item from "@models/ItemModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await req.json();

      const { _id, name, description, qty, size, price } = data;

      connectDb();

      const item = await Item.findOne({ _id });
      return data;
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "POST") {
  }
}
