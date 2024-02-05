const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema(
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

const ItemModel = mongoose.model("Item", ItemSchema);

module.exports = ItemModel;
