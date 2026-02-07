const express = require("express");
const router = express.Router();
const updateProfileValidator = require("../../validator/user/updateUserValidator");
const updateProfileController=require("../../controllers/userController/updateUserController")

router.patch("/updateProfile",updateProfileValidator,updateProfileController);

module.exports = router;
