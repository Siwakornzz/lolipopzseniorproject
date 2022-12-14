import Hirecontract from "../models/hirecontract";

import Subcontract from "../models/subcontract";
import User from "../models/User";
const ObjectId = require("mongoose").Types.ObjectId;

export const Query = {
  // User
  user: (parent, args, { userId }, info) => {
    // check if user loggedIn ?
    if (!userId) throw new Error("User not logged in please login !");

    // if (userId !== args.id) throw new Error("Not Authorized");
    return User.findById(userId)
      .populate({
        path: "subcontracts",
        options: { sort: { createdAt: "asc" } },
        populate: { path: "subcontractCreatorId" },
      })
      .populate({
        path: "hirecontracts",
        options: { sort: { createdAt: "asc" } },
        populate: { path: "hirecontractCreatorId" },
      })
      .populate({
        path: "subcontracts",
        populate: { path: "hirecontractWorkId" },
      })
      .populate({
        path: "hirecontracts",
        populate: { path: "subcontractAcceptHirecontractId" },
      });
  },

  users: (parent, args, context, info) =>
    User.find({})
      .populate({
        path: "subcontracts",
        options: { sort: { createdAt: "asc" } },
        populate: { path: "subcontractCreatorId" },
      })
      .populate({
        path: "hirecontracts",
        options: { sort: { createdAt: "asc" } },
        populate: { path: "hirecontractCreatorId" },
      }),

  // Subcontract
  subcontract: (parent, args, context, info) =>
    Subcontract.findById(args.id)
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontracthasassign: (parent, args, context, info) =>
    Subcontract.find({ subcontractCreatorId: ObjectId(args.id) })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" }),

  subcontracts: (parent, args, context, info) =>
    Subcontract.find({})
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontractswaiting: (parent, args, context, info) =>
    Subcontract.find({ status: "WAITING" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontractsapprove: (parent, args, context, info) =>
    Subcontract.find({ status: "??????????????????????????????" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontractsdenied: (parent, args, context, info) =>
    Subcontract.find({ status: "??????????????????" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontractspendingcancel: (parent, args, context, info) =>
    Subcontract.find({ status: "?????????????????????????????????????????????????????????????????????????????????????????????" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  adminapprovesubcontractspendingcancel: (parent, args, context, info) =>
    Subcontract.find({ status: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontractswebdevelopment: (parent, args, context, info) =>
    Subcontract.find({
      $and: [
        { status: "?????????????????????????????????" },
        { natureofwork: { $regex: "webdevelopment" } },
      ],
    })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" })
      .populate({
        path: "hirecontractWorkId",
        populate: { path: "hirecontracts" },
      }),

  subcontractswordpress: (parent, args, context, info) =>
    Subcontract.find({
      $and: [
        { status: "?????????????????????????????????" },
        { natureofwork: { $regex: "wordpress" } },
      ],
    })
      .populate({
        path: "subcontractCreatorId",
        populate: { path: "subcontracts" },
      })
      .sort({ createdAt: "asc" }),

  // Hirecontract
  hirecontract: (parent, args, context, info) =>
    Hirecontract.findById(args.id)
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),

  hirecontracts: (parent, args, context, info) =>
    Hirecontract.find({})
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      })
      .populate({
        path:"subcontractCreatorId",
        populate:{path:"users"}
      }),

  hirecontractswaiting: (parent, args, context, info) =>
    Hirecontract.find({ status: "WAITING" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),

  hirecontractswaitingassign: (parent, args, context, info) =>
    Hirecontract.find({ status: "???????????????????????????????????????????????????????????????????????????????????????????????????" }).populate(
      {
        path: "hirecontractCreatorId",
        populate: { path: "subcontracts" },
      }
    ),

  hirecontractsapprove: (parent, args, context, info) =>
    Hirecontract.find({ status: "APPROVE" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),

  hirecontractsdenied: (parent, args, context, info) =>
    Hirecontract.find({ status: "DENIED" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),

  hirecontractspendingcancel: (parent, args, context, info) =>
    Hirecontract.find({ status: "HIRECONTRACT-PENDINGCANCEL" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),

  hirecontractspendingcancel: (parent, args, context, info) =>
    Hirecontract.find({ status: "SUBCONTRACT-PENDINGCANCEL" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),

  adminapprovehirecontractscancel: (parent, args, context, info) =>
    Hirecontract.find({ status: "CANCEL" })
      .populate({
        path: "hirecontractCreatorId",
        populate: { path: "hirecontracts" },
      })
      .populate({
        path: "subcontractAcceptHirecontractId",
        populate: { path: "subcontracts" },
      }),
};
