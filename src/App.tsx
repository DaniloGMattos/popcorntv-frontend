import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Routes } from "./routes";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
}
