import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname:{
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: {
    type: String,
  },
  resetTokenExpiry: {
    type: Number,
  },
  subcontracts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcontract",
    },
  ],
  hirecontracts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hirecontract",
    },
  ],
  roles: {
    type: String,
    default: "User",
  },
  createdAt: {
    type: Date,
    default: () => Date.now() + 60 * 60 * 1000 * 7,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
