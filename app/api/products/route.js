import { connectDb } from "@dbConfig/db";
import Item from "@models/ItemModel";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    connectDb();
    const products = await Item.find({});
    return NextResponse.json(
      products,
      { status: 200 },
      {
        message: "products found",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({ error: "Internal server error" });
  }
}
