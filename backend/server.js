require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const { getAmazonAccessToken } = require("./auth"); // Ensure helper handles authentication

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * Start Express Server
 */
app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});




// Step 1: Redirect user to TikTok login
app.get('/auth/tiktok', (req, res) => {
    const { TIKTOK_CLIENT_KEY, REDIRECT_URI } = process.env;
    const url = `https://www.tiktok.com/v2/auth/authorize/?client_key=${TIKTOK_CLIENT_KEY}&response_type=code&scope=user.info.basic+video.list&redirect_uri=${REDIRECT_URI}&state=test`;
    res.redirect(url);
  });
  
  // Step 2: Handle callback
  app.get('/auth/tiktok/callback', async (req, res) => {
    const { code } = req.query;
    try {
      const tokenRes = await axios.post('https://open.tiktokapis.com/v2/oauth/token/', {
        client_key: process.env.TIKTOK_CLIENT_KEY,
        client_secret: process.env.TIKTOK_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.REDIRECT_URI,
      });
  
      const { access_token } = tokenRes.data.data;
      // Optionally save this token in a DB
  
      res.json({ access_token });
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(500).send("Token exchange failed");
    }
  });
  