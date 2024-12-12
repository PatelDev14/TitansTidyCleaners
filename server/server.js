// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 5001;

// const cors = require("cors");
// app.use(cors());


// // Middleware
// app.use(bodyParser.json());  // Parse JSON data
// app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded data

// // Set up Nodemailer transport
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'devp1400@gmail.com',  // Your Gmail address
//         pass: 'Sujyotsna@7',   // App-specific password (or your Gmail password if less secure apps are enabled)
//     },
// });

// // POST route for contact form
// app.post('/submit-form', (req, res) => {
//     const { name, email, message } = req.body;

//     // Set up email data
//     const mailOptions = {
//         from: email,  // Sender's email
//         to: 'devp1400@gmail.com',  // Static recipient email (can be dynamic based on your need)
//         subject: `Message from ${name}`,
//         text: message,
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error("Error sending email:", error);
//             return res.status(500).json({
//                 success: false,
//                 message: "Failed to send email.",
//                 error: error,
//             });
//         }
//         console.log("Email sent: " + info.response);
//         res.json({
//             success: true,
//             message: "Form submitted successfully!",
//             data: { name, email, message },
//         });
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 5001;

const cors = require("cors");
app.use(cors());

// Middleware
app.use(express.json());  // Parse JSON data
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data

// Simple health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
