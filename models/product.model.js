const mongoose = require("mongoose");
/* Schema */
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,

  tags: [String],
  brand: String,
  sku: String,
  weight: Number,

  dimensions: {
    width: Number,
    height: Number,
    depth: Number,
  },

  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,

  reviews: [
    {
      rating: Number,
      comment: String,
      date: Date,
      reviewerName: String,
      reviewerEmail: String,
    },
  ],

  returnPolicy: String,
  minimumOrderQuantity: Number,

  meta: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },

  barcode: String,
  qrCode: String,

  images: [String],
  thumbnail: String,
  deleted: Boolean,
  status: String,
});

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
