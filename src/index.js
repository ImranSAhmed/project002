import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./room.css";

function Room() {
  const [isLit, SetLit] = React.useState(true);

  function Test() {
    SetLit(!isLit);
  }

  return (
    <div className={`room ${isLit? "lit" : "dark"}`}>
    <div>
    Room is {isLit ? "Lit" : "Dark"}
     <br/>
      <button onClick={Test}>Click Me</button>
     
      <p>Current value of Lit = {isLit.toString()}</p>
    </div>
     
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Room />
  </React.StrictMode>,
  document.getElementById("root")
);

/* ReactDOM.render(
  <React.StrictMode>
    <App name="IMRAN Ahmed" />
  </React.StrictMode>,
  document.getElementById("root")
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
