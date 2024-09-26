import express from "express";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.get("/", authentication, (req, res) => {
    res.render("today");
});

export default router;