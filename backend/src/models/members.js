// models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true, minlength: 5 },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (email) {
        // Regular expression to validate email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  telephone: {
    type: String,
    validate: {
      validator: function (phone) {
        // Regular expression to validate German phone number format
        return /^(\+49|0)[0-9]{10,11}$/.test(phone);
      },
      message: (props) => `${props.value} is not a valid German phone number!`,
    },
  },
  region: String,
});

const User = mongoose.model("User", userSchema);

export default User;

