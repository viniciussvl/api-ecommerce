import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
