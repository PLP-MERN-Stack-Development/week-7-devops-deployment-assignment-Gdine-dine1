const mongoose = require('mongoose');
require('dotenv').config();
const Category = require('./models/category'); // use lowercase to match actual filename

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Category.deleteMany();

    await Category.insertMany([
      { name: 'Tech' },
      { name: 'Cooking' },
      { name: 'Travel' },
      { name: 'Lifestyle' }
    ]);

    console.log('✅ Categories seeded');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();

