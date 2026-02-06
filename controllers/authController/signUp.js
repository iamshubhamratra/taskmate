const logger = require("../../helper/logger");
const user = require("../../models/userModel");
const SignUpMail = require("../../helper/sendMail");
const encPass = require("../../helper/encPassword");
const sendResponse = require("../../helper/sendResponse");

// signup
async function signUp(req, res) {
  try {
    const data = req.userData;

    const { name, email, password, role, designation, Bio } = data;

    const hashPassword = await encPass(password, "encrypt");

    const newUser = new user({
      name,
      email,
      password: hashPassword,
      role,
      designation,
      Bio,
    });
    await newUser.save();

    await SignUpMail.SignUPMail({
      receiver: newUser.email,
      userName: newUser.name,
    });

    return sendResponse(
      res,
      200,
      "success",
      "user signed up successfully",
      data
    );
  } catch (err) {
    logger.log({
      level: "info",
      message: "error in signupController >>>>>",
      error: err.message,
    });
  }
}

module.exports = signUp;
