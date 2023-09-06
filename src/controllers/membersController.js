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

//Delete member function
export const deleteMember = async (req, res) => {
  try {
    const memberId = req.params.id; //receive memberId as a parameter

    // Find the member by their ID in the database
    const member = await User.findById(memberId);

    if (!member) {
      // If the member is not found, return a 404 error
      return res.status(404).json({ error: "Member not found" });
    }

    // If the member is found, then delete them from the database
    await User.findByIdAndRemove(memberId);

    // Return a success message
    return res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    // If any error occurs during the process, return a 500 error
    res.status(500).json({ error: "Failed to delete member" });
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
  deleteMember,
};
