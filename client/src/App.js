import React from "react";
import LandingPage from "./components/landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code} /> : <LandingPage />;
}
export default App;
