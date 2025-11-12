const team = require("../../models/teamModel");
const sendResponse = require("../../helper/sendResponse");

// create team
async function createTeam(req, re, next) {
  const name = req.body?.name;
  if (!name) {
    return sendResponse(resizeBy, 400, "failure", "provide team name");
  }

  const newteam = new team({ name, teamKey, role: "admin" });
  await newteam.save();
}
