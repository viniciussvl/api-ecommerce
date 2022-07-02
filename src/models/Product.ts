import mongoose from "mongoose";
import slugify from "../utils/slugify";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
    imageUrl: {
      type: String,
    },
    categoryId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.pre("save", function (next) {
  this.slug = slugify(this.name as string);

  next();
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
