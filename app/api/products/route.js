import { connectDb } from "@dbConfig/db";
import Item from "@models/ItemModel";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    connectDb();
    const products = await Item.find();
    return NextResponse.status(201).json({
      message: "products found",
      products,
    });
  } catch (error) {
    console.log(error);
  }
}
