// server/index.js

const express = require("express");
const cors = require("cors");
const config = require("../config/config");
const trimMiddleware = require("../middleware/trimMiddleware");
const errorHandler = require("../middleware/errorHandler");
const emailRoutes = require("../routes/emailRoutes");
const subscriptionRoutes = require("../routes/subscriptionRoutes");
const { google } = require("googleapis");

const app = express();

// Use the cors middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(trimMiddleware); // Use the trim middleware

// API routes
app.use("/api/email", emailRoutes);
app.use("/api/subscription", subscriptionRoutes);

const oAuth2Client = new google.auth.OAuth2(
  config.clientId,
  config.clientSecret,
  config.redirectUri
);

// Callback route to handle Google OAuth2 response
app.get("/oauth/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Missing code parameter in the query string.");
  }

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    console.log("Your refresh token is:", tokens.refresh_token);

    // You can save the refresh token to use later
    res.send("Authorization successful! You can now close this window.");
  } catch (error) {
    console.error("Error retrieving access token", error);
    res.status(500).send("Error retrieving access token.");
  }
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(config.serverPort, () => {
  console.log(`Server is running on port ${config.serverPort}`);
});
// Log all routes after starting the server
// app._router.stack.forEach(function (r) {
//   if (r.route && r.route.path) {
//     console.log(r.route.path);
//   }
// });
