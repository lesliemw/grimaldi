import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    streetAddress: String,
    city: String,
    county: String,
    country: String,
    postalCode: String,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
