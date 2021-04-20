import { React } from "react";
import { Button } from "react-bootstrap";

const url = "https://accounts.spotify.com/en/logout";
var logout;

function popUp() {
  logout = window.open(
    url,
    "Spotify Logout",
    "width=700,height=500,top=40,left=40"
  );
  setTimeout(() => logout.close(), 1000);
}

function finishLogout() {
  popUp();
  if (popUp) {
    setTimeout(() => (window.location.href = "/"), 2000);
  }
}
export default function Logout() {
  return (
    <Button onClick={finishLogout} variant="outline-success">
      Logout
    </Button>
  );
}
