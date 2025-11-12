const express = require("express");
const signupValidator = require("../../validator/auth/signupValidator");
const signUp = require("../../controllers/authController/signUp");
const loginValidator = require("../../validator/auth/loginValidator");
const login = require("../../controllers/authController/login");
const authFn = require("../../middleware/authFn");
const authRouter = express.Router();
const logout = require("../../controllers/authController/logout");
const resetPassValidator = require("../../validator/auth/resetPassValidator");
const resetPass = require("../../controllers/authController/resetPass");

// Sign up
authRouter.post("/signup", signupValidator, signUp);

// login
authRouter.post("/login", loginValidator, login);

// logout
authRouter.get("/logout", logout);

// reset Password
authRouter.post("/resetpass", authFn, resetPassValidator, resetPass);

module.exports = authRouter;
