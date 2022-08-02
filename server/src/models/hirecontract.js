import mongoose from "mongoose";

const HirecontractSchema = new mongoose.Schema({

  condition: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  typeofwork: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  zone: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
    default: "WAITING",
  },
  hirecontractCreatorId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subcontractAcceptHirecontractId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcontract",
  },
  createdAt: {
    type: Date,
    default: () => Date.now() + 60 * 60 * 1000 * 7,
  },
});

const Hirecontract = mongoose.model("Hirecontract", HirecontractSchema);

export default Hirecontract;
