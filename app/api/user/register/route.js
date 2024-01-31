import { connectDb } from "@dbConfig/db";
import User from "@models/UserModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

connectDb();

export async function POST(req) {
  try {
    const data = await req.json();

    const { fname, lname, email, password } = data;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { status: 400 },
        { error: "User already exists" }
      );
    } else {
      //hash password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const newUser = await User.create({
        fname,
        lname,
        email,
        password: hashedPassword,
      });

      return NextResponse.json(
        { status: 201 },
        { message: "User created:", newUser }
      );
    }
  } catch (error) {
    return NextResponse.json({ status: 500 }, { message: "Error", error });
  }
}
