const mongoose = require('mongoose');

const { Schema } = mongoose;

// const productSchema = new Schema({
//   id: Number,
//   slug: String,
//   name: String,
//   image: {
//     mobile: String,
//     tablet: String,
//     desktop: String,
//   },
//   category: String,
//   categoryImage: {
//     mobile: String,
//     tablet: String,
//     desktop: String,
//   },
//   new: Boolean,
//   price: Number,
//   description: String,
//   features: String,
//   includes: [
//     {
//       quantity: Number,
//       item: String,
//     },
//   ],
//   gallery: {
//     first: {
//       mobile: String,
//       tablet: String,
//       desktop: String,
//     },
//     second: {
//       mobile: String,
//       tablet: String,
//       desktop: String,
//     },
//     third: {
//       mobile: String,
//       tablet: String,
//       desktop: String,
//     },
//   },
//   others: [
//     {
//       slug: String,
//       name: String,
//       image: {
//         mobile: String,
//         tablet: String,
//         desktop: String,
//       },
//     },
//   ],
// });
const productSchema = new Schema({ any: Schema.Types.Mixed });
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
