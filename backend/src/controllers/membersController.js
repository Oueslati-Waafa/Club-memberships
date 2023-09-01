// membersController.js
import User from "../models/members.js";

export const listMembers = async (req, res) => {
  try {
    // Fetch the list of registered members from the database
    const members = await User.find();

    // Send the list of members as a response
    res.json({ members });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
};

export const getMemberById = async (req, res) => {
  try {
    const memberId = req.params.id; // Get the member ID from the request parameters

    // Fetch the member from the database using the provided ID
    const member = await User.findById(memberId);

    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }

    // Send the member data as a response
    res.json({ member });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch member" });
  }
};

export const registerUser = async (req, res) => {
  const { firstname, lastname, username, email, telephone, region } = req.body;

  try {
    // Check if username, email, or telephone already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { telephone }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username, email, or telephone already exists" });
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
    if (error.name === "ValidationError") {
      // Construct an array of error messages from the validation errors
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res
        .status(400)
        .json({ message: "Validation errors", errors: validationErrors });
    } else {
      return res.status(500).json({ message: "An error occurred" });
    }
  }
};

export default {
  listMembers,
  registerUser,
  getMemberById,
};
