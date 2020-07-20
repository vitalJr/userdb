import User from '../models/User'
import crypto from 'crypto';
import { addMinutes, isAfter } from 'date-fns'
import mail from '../helpers/Mail';
import mailConfig from '../config/mail';

class RecoveryController {
    async store(req, res) {
        const { email } = req.body;
        console.log(email);

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User does not found." });
        }

        const token = await crypto.randomBytes(8).toString('hex');
        const exp = addMinutes(new Date, 5);

        user.token = token;
        user.expiration = exp;

        //email
        mail.sendEmail({
            from: mailConfig.from,
            to: 'vital_junior_@hotmail.com',
            subject: 'Recuperação de senha',
            text: `Aqui está o seu token de recuperação de senha ${token}`
        })


        await user.save();
        return res.status(200).send();

    }

    async update(req, res) {
        const { token, password } = req.body;
        const user = await User.findOne({ token });

        if(!user){
            return res.status(400).json({error: "User not found."});
        }

        console.log(user.expiration);

        if (isAfter(new Date(), user.expiration)) {
            return res.status(400).json({ error: "Token experied" });
        }

        user.password = password;
        user.token = null;
        user.expiration = null

        await user.save();
        return res.status(200).send();
    }

}

export default new RecoveryController();