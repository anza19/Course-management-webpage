//This is the entry point of our application
//create-react-app uses this as the entry point
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById('root'));