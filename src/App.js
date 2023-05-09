import React from "react";
import GlobalStyle from "./globalStyle";
import { Container } from "./globalStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom"; // Rout
import { Hstyle  , Cont} from "./localStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Router></Router>
      <Switch>
        <Cont
          style={{ height: "100vh", display: "grid", "align-items": "center" }}
        >
          <Hstyle
            style={{
              color: "rgb(94, 94, 94)",
              "text-align": "center",
            }}
          >
            Welcome to{" "}
            <span style={{ color: "rgb(76, 227, 160)" }}>Devjobs web app</span>{" "}
            This app is under construction ..
          </Hstyle>
        </Cont>
      </Switch>
    </Router>
  );
}

export default App;
