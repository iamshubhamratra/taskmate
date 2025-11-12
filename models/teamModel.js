const mongoose = require("mongoose");

// team schema
const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      readired: [true, "Name is required"],
      trim: true,
    },
    teamKey: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "member"],
      required: true,
    },
    pendingRequests: [
      {
        user: {},
        requestedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const teamModel = mongoose.model("team", teamSchema);
module.exports = teamModel;
