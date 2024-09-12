import {User} from "../models/index.js"

class UserController {
    async signup(req, res) {
        const userExist = await User.findOne({where: {email: req.body.email}});

        if(userExist) {
            return res.status(400).json({message: "User already exist"});            
        }

        User.create({
            email: req.body.email,
            password: req.body.password,
            goal: 'test',
            age: 22,
            height: 180,
            weight: 80
        });

        req.session.user = {email: req.body.email};
        res.redirect("home");
    }

    async signin(req, res) {
        const userExist = await User.findOne({where: {email: req.body.email, password: req.body.password}});

        if(userExist) {
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