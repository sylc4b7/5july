const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory storage
let dataStore = [];

// Basic Authentication middleware
const basicAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Get the Authorization header

  if (!authHeader || !authHeader.startsWith("Basic ")) {
	return res.status(401).json({ error: "Unauthorized: Missing or invalid Authorization header" });
  }

  // Decode the Base64-encoded credentials
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [username, password] = credentials.split(":");

  // Validate username and password (replace with your own logic)
  if (username !== "admin" || password !== "password123") {
	return res.status(403).json({ error: "Forbidden: Invalid credentials" });
  }

  next(); // Proceed to the next middleware or route handler
};

// POST /create - Store data in memory (requires Basic Authentication)
app.post("/create", basicAuth, (req, res) => {
  const { value } = req.body;

  if (!value) {
	return res.status(400).json({ error: "Value is required" });
  }

  // Add the value to the in-memory store
  dataStore.push(value);
  res.status(201).json({ message: "Value stored successfully", value });
});

// GET /data - Retrieve all stored data (no authentication required)
app.get("/data", (req, res) => {
  res.json({ data: dataStore });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});