const sendResponse = require("../../helper/sendResponse");
const encPass = require("../../helper/encPassword");
const userModel = require("../../models/userModel");

async function resetPass(req, res, next) {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.userId;

    if (!userId) {
      return sendResponse(res, 400, "failure", "unauthorized");
    }

    // find user
    const user = await userModel.findById(userId);
    if (!user) {
      return sendResponse(res, 400, "failure", "User not found");
    }

    const matchOldPass = await encPass(oldPassword, "decrypt", user.password);
    if (!matchOldPass) {
      return sendResponse(res, 400, "failure", "send correct oldPassword");
    }

    const encNewPass = await encPass(newPassword, "encrypt");

    user.password = encNewPass;
    await user.save();

    return sendResponse(res, 200, "success", "Password updated successfully");
  } catch (err) {
    logger.log({
      level: "info",
      message: "error in resetPassController >>>>>",
      error: err.message,
    });
  }

  next();
}

module.exports = resetPass;
