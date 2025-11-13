const express = require("express");
const teamRouter = express.Router();
const createTeam = require("../../controllers/teamController/createTeam");
const createTeamValidator = require("../../validator/team/createTeamValidator");
// create team
teamRouter.post("/createTeam", createTeamValidator, createTeam);

module.exports = teamRouter;
