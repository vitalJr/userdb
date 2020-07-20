// import nodemailer from 'nodemailer';
// import mailConfig from '../config/mail';
const nodemailer =  require('nodemailer');
const mailConfig =  require('../config/mail');

class Mail {

    constructor() {
        const { host, port, secure, auth } = mailConfig;

        this.transporter = nodemailer.createTransport({
            host, port, secure, auth
        });
    }

    sendEmail(data) {
        this.transporter.sendMail(data);
    }

}

module.exports = new Mail();
// export default new Mail();