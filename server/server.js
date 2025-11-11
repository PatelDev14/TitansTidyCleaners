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
