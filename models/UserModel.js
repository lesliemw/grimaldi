import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: {
      type: String,
      unique: [true, "An account with this email already exists. "],
      required: true,
    },
    password: { type: String, required: true },
    streetAddress: String,
    city: String,
    county: String,
    country: String,
    postalCode: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
