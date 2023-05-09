import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux'
import store from './Redux/store'
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)