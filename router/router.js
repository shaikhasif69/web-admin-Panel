const express = require("express");
const router = express.Router();

router.get("/admin", (req, res) => {
  res.render("home");
});
router.get("/admin/login", (req, res) => {
  res.render("authentication/sign-in");
});

router.get("/admin/sign-up", (req, res) => {
  res.render("authentication/sign-up");
});
module.exports = router;
