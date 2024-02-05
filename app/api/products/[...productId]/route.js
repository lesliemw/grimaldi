import { connectDb } from "@dbConfig/db";
import Item from "@models/ItemModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    connectDb();

    const url = new URL(req.url);
    const pathnameSegments = url.pathname.split("/"); // Split pathname by "/"
    const productId = pathnameSegments[pathnameSegments.length - 1]; // Get the last segment

    // const url = new URL(req.url);
    // console.log(url);
    // const productId = url.searchParams.get("productId");

    const products = await Item.findById(productId);
    return NextResponse.json(
      products,
      { status: 200 },
      {
        message: "product found",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({ error: "Internal server error" });
  }
}
