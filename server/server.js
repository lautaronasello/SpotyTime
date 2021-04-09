const express = requier("express");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirecUri: "http://localhost:3000",
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
    .catch(() => {
      res.sendStatus(400);
    });
});
