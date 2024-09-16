import {User} from "../models/index.js"
import bcrypt from "bcrypt";

class UserController {
    async signup(req, res) {
        const userExist = await User.findOne({where: {email: req.body.email}});

        if(userExist) {
            return res.status(400).json({message: "User already exist"});            
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        User.create({
            email: req.body.email,
            password: hashedPassword
        });

        req.session.user = {email: req.body.email};
        res.redirect("home");
    }

    async signin(req, res) {
        const userExist = await User.findOne({where: {email: req.body.email}});

        if(userExist && await bcrypt.compare(req.body.password, userExist.password)) {
            req.session.user = {email: req.body.email};
            res.redirect("home");   
            return;
        }

        return res.status(400).json({message: "User not found"});  
    }

    logout(req, res) {
        req.session.destroy();
        res.redirect("signin");
    }
}

export default new UserController();