import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure your SMTP transporter here
      // For production, use environment variables for security
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // Your email
          pass: process.env.SMTP_PASS, // Your app password
        },
      });

      const mailOptions = {
        from: `"${username}" <${email}>`,
        to: "info@85editorial.com",
        subject: `【お問い合わせ】85 Editorial - ${username}様より`,
        text: `お名前・会社名: ${username}\nメールアドレス: ${email}\n\n内容:\n${message}`,
        replyTo: email,
      };

      // If SMTP credentials are not set, we'll log it and return success for the demo
      // but in a real app, you'd want to ensure these are configured.
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log("SMTP credentials not set. Logging email content instead:");
        console.log(mailOptions);
        return res.json({ 
          success: true, 
          message: "SMTP credentials not set, but form data received (logged to server console)." 
        });
      }

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
