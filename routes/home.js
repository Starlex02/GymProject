import express from "express";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.get("/", authentication, (req, res) => {
    res.render("home");
});

export default router;