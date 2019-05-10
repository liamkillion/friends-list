import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23
