const express = require("express");
const cors = require("cors");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "5e840d136ada47be9bd8479cc2223f1e",
    clientSecret: "790e40bd54204fe3b918d0339cd4d9a1",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log(data.body);
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "5e840d136ada47be9bd8479cc2223f1e",
    clientSecret: "790e40bd54204fe3b918d0339cd4d9a1",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(3001);
