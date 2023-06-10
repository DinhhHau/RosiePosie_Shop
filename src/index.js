import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./assets/scss/style.scss";
// import "./assets/scss/styles.scss";
import "./assets/scss/style.scss";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" elment={<App />}>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
