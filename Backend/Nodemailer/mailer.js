const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "melvina.white13@ethereal.email", 
    pass: "wUC4BhggxDNa5zF3sK", 
  },
});

router.post("/send_email", async (req, res) => {
  const { email, subject, message } = req.body;
  let mailOptions = {
    from: email, 
    to: "kkami5754049@gmail.com", 
    subject: subject,
    html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`, 
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res
      .status(200)
      .send({ message: "Your message has been sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res
      .status(500)
      .send({
        message: "Failed to send message. Please try again later.",
        error,
      });
  }
});

module.exports = router;
