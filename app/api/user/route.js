import { connectDb } from "@dbConfig/db";
import { NextResponse } from "next/server";
import User from "@models/UserModel";
import bcryptjs from "bcryptjs";

connectDb();

export async function POST(req) {
  try {
    const body = await req.json();
    const { fname, lname, email, password } = body;
    console.log(body);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fname,
      lname,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
