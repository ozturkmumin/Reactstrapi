import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BlogContentPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { BlogContents } from "./components";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/blogs" element={<BlogContentPage />}></Route>
        <Route path="/blog/:id" element={<BlogContents />}></Route>
      </Routes>
    </>
  );
}
