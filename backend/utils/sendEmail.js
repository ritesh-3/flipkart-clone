const nodeMailer = require('nodemailer');

module.exports = getResetPasswordHtml = (data) => {

    retrun`<html>
    <head>
      <style>
        .button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <p>Hello ${data.name},</p>
      <p>Please click on the button below to Reset your Flipkart clone password:</p>
      <a class="button" href="${data.resetPasswordUrl}" target="_blank">Reset Password</a>
    </body>
  </html>`
}

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        html: options.html,
    };

    await transporter.sendMail(mailOptions).then(() => {
        console.log('Email Sent')
    }).catch((error) => {
        console.error(error)
    });
};

module.exports = sendEmail;