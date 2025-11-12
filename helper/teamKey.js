const crypto = require("crypto");
const team = require("../models/teamModel");

// Generate Team key
async function generateTeamKey() {
  let teamKey = crypto.randomBytes(10).toString("hex").toUpperCase();
  return teamKey;
}


module.exports = generateTeamKey;



