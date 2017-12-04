var mailer = require('nodemailer');

class Mailer {
    constructor() {
        this.transport = mailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'miqdadfawwaz95@gmail.com',
                pass: 'bismill4h'
            }
        });
        this.sender = '"Administrator Bank Lahan" <BankLahan@apps.ipb.ac.id>';
        this.subject;
        this.tamplate;
    }

    SetTamplateRegister(data) {
        this.subject = 'Verifikasi akun pada banklahan';
        this.tamplate = `
            <p>Silahkan klik tombol di bawah ini untuk memverifikasi akun anda di banklahan</p>
            <p> NB: jika anda tidak merasa mendaftarkan email anda di bank lahan, abaikan email ini.</p>
            <p><a href="http://localhost:4200/#/login/reset-password/`+ data +`">
            <button style:'	background-color: red; border:none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;'> Klik here </button></a></p>
            `
    }

    SendEmail(email,res) {
        var mailOptions = {
            from: this.sender, // sender
			to: email, // receiver
			subject: this.subject,  // tittle
			html: this.tamplate
        }
        console.log(mailOptions)
		this.transport.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.json({status: false, message: 'Mail sent failed', err: error})
			} else {
				console.log('Message %s sent: %s', info.messageId, info.response)
			}
		})
	}
}

module.exports = new Mailer;