exports.handleContactForm = (req, res) => {
    const { name, email, message } = req.body; // Extract text fields from the request body
    const image = req.file; // Extract the image file (if uploaded)
  
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    // Success response
    res.status(200).json({
      success: true,
      data: {
        name,
        email,
        message,
        imagePath: image ? image.path : null, // Path to the uploaded image
      },
      message: "Form submitted successfully!",
    });
  };
  
  