import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());



// Email Sending Route
app.post("/send", async (req, res) => {
  try {
    const { name, address, phone, cart, totalAmount } = req.body;

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Format Order Details
    const orderDetails = cart
      .map((item) => `${item.name} (Qty: ${item.quantity}) - ${item.price}`)
      .join("\n");

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // Admin Email
      subject: "New Order Received",
      text: `New Order Details:\n\nCustomer Name: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nOrder Items:\n${orderDetails}\n\nTotal Amount: $${totalAmount}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Order email sent to admin!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.get("/", (req, res)=>{

 res.send("every thing is okay");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
