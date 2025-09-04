const nodemailer = require("nodemailer");
const path = require("path"); // File path ke liye

// ✅ Gmail Transporter (App Password ke saath)
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// ✉️ Function to send contact email + auto-reply
const sendContactEmail = async (contactData) => {
  const { name, email, service, mobile, message } = contactData;

  // Local image path (project me image ka path)
  const logoPath = path.join(__dirname, "../../public/logoAcordan1.png"); 

  // Email to admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="cid:companylogo" alt="Acordan Research" style="width: 150px;"/>
          <h1 style="color: #2F6BE0; margin: 10px 0;">Acordan Research</h1>
        </div>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2F6BE0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; background: #fff; border-radius: 5px; border: 1px solid #ddd;">
            ${message}
          </div>
        </div>
        <p style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
          © ${new Date().getFullYear()} Acordan Research. All rights reserved.
        </p>
      </div>
    `,
    attachments: [
      {
        filename: "logoAcordan1.png",
        path: logoPath,
        cid: "companylogo", // Same as img src
      },
    ],
  };

  // Auto-reply to user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting us - Forex",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="cid:companylogo" alt="Acordan Research" style="width: 150px;"/>
          <h1 style="color: #2F6BE0; margin: 10px 0;">Acordan Research</h1>
        </div>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2F6BE0;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We received your message about <b>${service}</b>. Our team will get back to you within 24 hours.</p>
          <blockquote style="padding: 10px; background: #fff; border-radius: 5px; border: 1px solid #ddd;">
            ${message}
          </blockquote>
          <p>Best regards,<br><strong>Forex Team</strong></p>
        </div>
      </div>
    `,
    // attachments: [
    //   {
    //     filename: "slider.png",
    //     path: logoPath,
    //     cid: "companylogo",
    //   },
    // ],
  };

  const transporter = createTransporter();

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    return { success: true, message: "Emails sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
};

// ✅ Verify SMTP Connection
const verifyConnection = async () => {
  const transporter = createTransporter();

  try {
    await transporter.verify();
    console.log("Email service is ready 🚀");
    return true;
  } catch (error) {
    console.error("Email service connection failed:", error);
    return false;
  }
};

module.exports = {
  sendContactEmail,
  verifyConnection,
};
