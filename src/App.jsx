import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/index";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
