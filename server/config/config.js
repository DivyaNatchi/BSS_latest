const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });

const config = {
  jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
  dbPath:
    path.resolve(__dirname, process.env.DB_PATH) ||
    path.join(__dirname, "../database/bss.db"),
  serverPort: process.env.PORT || 3000,
  comapanyEmail: process.env.COMPANY_EMAIL,
  emailUser: process.env.EMAIL_USER,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
  redirectUri: process.env.REDIRECT_URI,
};

module.exports = config;
