import mongoose from "mongoose";

const SubcontractSchema = new mongoose.Schema({
  name: {
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
  },
  skill: {
    type: String,
    required: true,
  },
  natureofwork: {
    type: String,
    required: true,
  },
  yearskill: {
    type: Number,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  member: {
    type: Number,
    required: true,
  },
  idcard: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  lineid: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  subdistrict: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  nameofbank: {
    type: String,
    required: true,
  },
  accountnumber: {
    type: String,
    required: true,
  },
  nameofaccount: {
    type: String,
    required: true,
  },
  promptpay: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "WAITING"
  },
  subcontractCreatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now() + 60 * 60 * 1000 * 7,
  },
});

const Subcontract = mongoose.model("Subcontract", SubcontractSchema);

export default Subcontract;
