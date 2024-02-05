import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    size: Array,
    category: String,
    description: String,
    src: String,
    alt: String,
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
