import express from "express";
import signin from "./signin.js";
import signup from "./signup.js";
import logout from "./logout.js";
import today from "./today.js";
import home from "./home.js";

const router = express.Router();

router.use("/signin", signin);
router.use("/signup", signup);
router.use("/logout", logout);
router.use("/today", today);
router.use("/", home);

export default router;