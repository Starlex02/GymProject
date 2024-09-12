import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("signin");
});

router.post("/", (req, res) => {
    UserController.signin(req, res);
})

export default router;