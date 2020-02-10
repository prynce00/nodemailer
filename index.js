const nodemailer = require("nodemailer");

async function main() {
   let transporter = nodemailer.createTransport({
      host: "mail.syndio.io",
      port: 26,
      tls: {
        rejectUnauthorized:false
      },
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'test@syndio.io',
        pass: '$lTC&Yt~B$uP'
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Ghost Mailer 👻" <test@syndio.io>', // sender address
      to: "rencechi05@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello Ghost?", // plain text body
      html: "<b style=\"color:red;\">We are trying to reach your inbox.. Please Unspam US!!</b>" // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error);