import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const openRoutes = [{ path: "/", element: <LoginPage /> }];
  return (
    <>
      {" "}
      <Routes>
        {openRoutes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
