import {User} from "../models/index.js"
import bcrypt from "bcrypt";

class UserController {
    async signup(req, res) {
        try {
            const userExist = await User.findOne({ where: { email: req.body.email } });
    
            if (userExist) {
                return res.status(400).json({ message: "User already exists" });
            }
    
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
            await User.create({
                email: req.body.email,
                password: hashedPassword
            });
    
            req.session.user = { email: req.body.email };
    
            req.session.save(() => {
                res.status(200).json();
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
            console.log(error.message);
        }
    }
    

    async signin(req, res) {
        try {
            const userExist = await User.findOne({where: {email: req.body.email}});

            if(userExist && await bcrypt.compare(req.body.password, userExist.password)) {
                req.session.user = {email: req.body.email};

                req.session.save(() => {
                    res.status(200).json();
                });  
                return;
            }

            res.status(400).json({message: "User not found"});  
        } catch (error) {
            res.status(500).json({ message: error.message });
            console.log(error);
        }
    }

    logout(req, res) {
        req.session.destroy();
        res.redirect("signin");
    }
}

export default new UserController();