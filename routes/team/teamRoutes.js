const express = require("express");
const teamRouter = express.Router();
const createTeam = require("../../controllers/teamController/createTeam");
const createTeamValidator = require("../../validator/team/createTeamValidator");
const deleteTeamValidator = require("../../validator/team/deleteTeamValidator");
const deleteTeam = require("../../controllers/teamController/deleteTeam");

// create team
teamRouter.post("/createTeam", createTeamValidator, createTeam);

// delete team
teamRouter.post("/deleteTeam", deleteTeamValidator, deleteTeam);

module.exports = teamRouter;
