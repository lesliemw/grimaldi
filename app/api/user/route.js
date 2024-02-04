import { connectDb } from "@dbConfig/db";
import User from "@models/UserModel";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const session = getServerSession();

  try {
    const email = (await session).user.email;

    connectDb();

    const user = await User.findOne({ email });
    console.log(user);

    return NextResponse.json({ message: "User found:", user }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
