const express = require("express");
const router = express();
const {
  signup,
  activateAccount,
  signin,
  getAllLandingPage,
  getDetailLandingPage,
  getDashboard,
  checkout,
} = require("./controller");
const { authenticateParticipant } = require("../../../middlewares/auth");

router.post("/auth/signup", signup);
router.post("/auth/signin", signin);
router.put("/active", activateAccount);
router.get("/events", getAllLandingPage);
router.get("/events/:id", getDetailLandingPage);
router.get("/orders", authenticateParticipant, getDashboard);
router.post("/checkout", authenticateParticipant, checkout);

module.exports = router;
