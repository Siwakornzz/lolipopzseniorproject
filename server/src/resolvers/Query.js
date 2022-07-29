import Hirecontract from "../models/hirecontract";

import Subcontract from "../models/subcontract";
import User from "../models/User";

export const Query = {
  // User
  user: (parent, args, { userId }, info) => {
    // check if user loggedIn ?
    if (!userId) throw new Error("User not logged in please login !");

    // if (userId !== args.id) throw new Error("Not Authorized");
    return User.findById(userId)
      .populate({
        path: "subcontracts",
        options: { sort: { createdAt: "desc" } },
        populate: { path: "subcontractCreatorId" },
      })
      .populate({
        path: "hirecontracts",
        options: { sort: { createdAt: "desc" } },
        populate: { path: "hirecontractCreatorId" },
      });
  },

  users: (parent, args, context, info) =>
    User.find({})
      .populate({
        path: "subcontracts",
        options: { sort: { createdAt: "desc" } },
        populate: { path: "subcontractCreatorId" },
      })
      .populate({
        path: "hirecontracts",
        options: { sort: { createdAt: "desc" } },
        populate: { path: "hirecontractCreatorId" },
      }),

  // Subcontract
  subcontract: (parent, args, context, info) =>
    Subcontract.findById(args.id).populate({
      path: "subcontractCreatorId",
      populate: { path: "subcontracts" },
    }),

  subcontracts: (parent, args, context, info) =>
    Subcontract.find({})
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "desc" }),

  subcontractswaiting: (parent, args, context, info) =>
    Subcontract.find({ status: "WAITING" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "desc" }),

  subcontractsapprove: (parent, args, context, info) =>
    Subcontract.find({ status: "APPROVE" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "desc" }),

  subcontractsdenied: (parent, args, context, info) =>
    Subcontract.find({ status: "DENIED" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "desc" }),

  subcontractspendingcancel: (parent, args, context, info) =>
    Subcontract.find({ status: "PENDINGCANCEL" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "desc" }),

  adminapprovesubcontractspendingcancel: (parent, args, context, info) =>
    Subcontract.find({ status: "CANCEL" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "desc" }),


  // Hirecontract
  hirecontract: (parent, args, context, info) =>
    Hirecontract.findById(args.id)
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  hirecontracts: (parent, args, context, info) =>
    Hirecontract.find({})
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  hirecontractswaiting: (parent, args, context, info) =>
    Hirecontract.find({ status: "WAITING" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  hirecontractsapprove: (parent, args, context, info) =>
    Hirecontract.find({ status: "APPROVE" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  hirecontractsdenied: (parent, args, context, info) =>
    Hirecontract.find({ status: "DENIED" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  hirecontractspendingcancel: (parent, args, context, info) =>
    Hirecontract.find({ status: "HIRECONTRACT-PENDINGCANCEL" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  hirecontractspendingcancel: (parent, args, context, info) =>
    Hirecontract.find({ status: "SUBCONTRACT-PENDINGCANCEL" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),

  adminapprovehirecontractscancel: (parent, args, context, info) =>
    Hirecontract.find({ status: "CANCEL" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "SubcontractCreatorId",
        populate: { path: 'subcontracts"' },
      }),
};
