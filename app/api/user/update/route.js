import { connectDb } from "@dbConfig/db";
import { getServerSession } from "next-auth/next";
import User from "@models/UserModel";
import { NextResponse } from "next/server";

export async function PATCH(req, res) {
  const session = await getServerSession();
  const body = await req.json();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const email = session.user.email;
  console.log(email);
  connectDb();

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: body },
      { new: true }
    );
    console.log(updatedUser);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("Error updating user data:", error);
    NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
