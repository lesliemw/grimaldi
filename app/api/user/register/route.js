import { connectDb } from "@dbConfig/db";
import User from "@models/UserModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const { fname, lname, email, password } = data;

    connectDb();

    const user = await User.findOne({ email });

    if (!data) {
      return NextResponse.json({
        status: 401,
        error: "Please fill in all details",
      });
    }

    if (user) {
      return new NextResponse.json(
        { status: 400 },
        { error: "User already exists" }
      );
    } else {
      //hash password
      const hashedPassword = await bcrypt.hash(password, 10);

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
