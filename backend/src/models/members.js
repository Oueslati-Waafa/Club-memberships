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
  region: String,
});

const User = mongoose.model("User", userSchema);

export default User;
