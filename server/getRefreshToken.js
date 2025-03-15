const { google } = require("googleapis");
const readline = require("readline");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "env/.env") });

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; // Your redirect URI

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a URL for user authorization
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});

console.log("Authorize this app by visiting this URL:", authUrl);

rl.question("Enter the code from that page here: ", (code) => {
  rl.close();

  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      return console.error("Error retrieving access token", err);
    }

    oAuth2Client.setCredentials(token);

    console.log("Your refresh token is:", token.refresh_token);
  });
});
