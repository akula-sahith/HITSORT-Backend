const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash("PFGSHS", 10);

  await User.create({
    username: "Admin",
    password: hashedPassword,
  });

  console.log("✅ Admin user inserted");
  process.exit();
});
