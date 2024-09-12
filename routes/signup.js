import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("signup");
});

router.post("/", (req, res) => {
    UserController.signup(req, res);
})

export default router;