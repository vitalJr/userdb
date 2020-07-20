import User from "../models/User";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { json } from 'express';
import jwtConfig from '../config/jwt';

class AuthController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Credentials do not match" });
        }

        if (user.deleted) {
            return res.status(401).json({ error: "Disabled user" });
        }

        const checkPassword = await bcryptjs.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({ error: "Credentials do not match" });
        }

        const { secret, expiresIn } = jwtConfig;
        const token = jwt.sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return res.json({ user: user.show(), token });

    }
}

export default new AuthController();