const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAll = catchAsync(async (req, res, next) => {
  const query = Product.find().sort({ _id: -1 });
  const products = await query;
  res.status(200).json({
    status: 'success',
    result: products.length,
    data: products,
  });
});

exports.getEarphones = catchAsync(async (req, res, next) => {
  const query = Product.find({ category: 'earphones' }).sort({ _id: 1 });
  const earphones = await query;
  res.status(200).json({
    status: 'success',
    data: earphones,
  });
});
exports.getHeadphones = catchAsync(async (req, res, next) => {
  const query = Product.find({ category: 'headphones' }).sort({ _id: -1 });
  const headphones = await query;
  res.status(200).json({
    status: 'success',
    data: headphones,
  });
});
exports.getSpeakers = catchAsync(async (req, res, next) => {
  const query = Product.find({ category: 'speakers' }).sort({ _id: -1 });
  const speakers = await query;
  res.status(200).json({
    status: 'success',
    data: speakers,
  });
});
exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new AppError('There is no product with mentioned id', 404));
  }
  res.status(200).json({
    status: 'success',
    data: { product },
  });
});
