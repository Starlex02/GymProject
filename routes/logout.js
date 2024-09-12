import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
    UserController.logout(req, res);
});

export default router;