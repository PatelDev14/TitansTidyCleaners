const express = require("express");
const router = express.Router();
const multer = require("multer");

// Set up Multer for file uploads
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), (req, res) => {
  const { name, email, message } = req.body;
  const imagePath = req.file ? req.file.path : null;

  console.log("Form submitted:", { name, email, message, imagePath });

  res.json({
    success: true,
    data: { name, email, message, imagePath },
    message: "Form submitted successfully!",
  });
});

module.exports = router;
