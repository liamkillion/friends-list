import * as React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

render(<App />, document.getElementById("root"));
registerServiceWorker();

// https://codeburst.io/webpack-typescript-react-part-1-dc154e250f23
