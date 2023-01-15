const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const Product = require('../models/productModel');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log('successful'));
const products = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));
const importData = async () => {
  try {
    await Product.create(products);
    console.log('data loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('data loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
console.log(process.argv);
