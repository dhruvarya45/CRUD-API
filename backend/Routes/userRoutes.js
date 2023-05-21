const express = require("express");

const {
    registerUser,
    authUser,
    allUsers,
  } = require("../Controllers/userController");

  const { protect } = require("../middleware/authMiddleWare");
  
  const router = express.Router();
  
  router.route("/").get(protect, allUsers);
  router.route("/").post(registerUser);
  router.post("/login", authUser);
  
  module.exports = router;