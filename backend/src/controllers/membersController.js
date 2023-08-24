
import User from "../models/members.js";

async function registerUser(req, res) {
  const { firstname, lastname, username, email, telephone, region } = req.body;

  try {
    // Check if username, email, or telephone already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { telephone }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username, email, or telephone already exists" });
    }

    // Create a new user document
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      telephone,
      region,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
}

export default {
  registerUser,
};
