import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Rout
// import { Hstyle  , Cont} from "./localStyle";
import GlobalStyle from "./globalStyle";
// import Main from "./component/Main/Main";
// import CommentTemplate from "./component/CommentTemplate/CommentTemplate";
import {ReplyInputTemplate} from "./component/ReplyInputTemplate/ReplyInputTemplate";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// const TemporaryProject = true

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Router>
      
      <ReplyInputTemplate />
      </Router>
      
 

      {
        // <CommentTemplate />
        // <Main />
        //   TemporaryProject ?
        //   <Cont
        //   style={{ height: "100vh", display: "grid", "align-items": "center" }}
        // >
        //   <Hstyle
        //     style={{
        //       color: "rgb(94, 94, 94)",
        //       "text-align": "center",
        //     }}
        //   >
        //     Welcome to{" "}
        //     <span style={{ color: "rgb(76, 227, 160)" }}>
        //     Interactive comments section</span>{" "}
        //     This app is under construction ..
        //   </Hstyle>
        //  </Cont> : <Home />
      }
    </Router>
  );
}

export default App;
