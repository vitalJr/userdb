// import User from '../models/User';
const User = require('../models/User');

class UserController {

    async show(req, res) {
        const user = await User.findById(req.user);

        if (!user) {
            return res.status(401).json({ error: "Only authenticated user can executed this" })
        }

        return res.json({ user: user.show() });
    }

    async list(req, res) {
        const users = await User.find({});

        return res.json(users);
    }

    async store(req, res) {
        const { name, email, password } = req.body;


        const usersExist = await User.findOne({ email });

        if (usersExist) {
            return res.status(401).json({ error: "User already exist." });
        }

        const user = await User.create({
            name,
            email,
            password
        })

        return res.json({ user: user.show() });
    }

    async update(req, res) {
        const user = await User.findById(req.user);
        const { name, email, password } = req.body;

        if (!user) {
            return res.status(401).json({ error: "Only authenticated user can executed this" })
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();
        return res.json({ user: user.show() });

    }

    async delete(req, res) {
        const user = await User.findById(req.user);

        if (!user) {
            return res.status(401).json({ error: "Only authenticated user can executed this" })
        }

        user.deleted = true;
        await user.save()

        return res.status(204).send();

    }

}

// export default new UserController();
module.exports = new UserController();