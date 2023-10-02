import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BlogContentPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { BlogContents } from "./components";
import useFetch from "./hooks/useFetch";
export default function App() {
  //Strapide oluşturduğum blog page de ki api yi çektim
  let {loading , data , error} = useFetch("http://localhost:1337/api/blogs?populate=*")

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error.</p>
  console.log(data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage blogs={data?data:""}/>}></Route>
        <Route path="/blog/:id" element={<BlogContentPage blogs={data?data:""}/>}></Route>
      </Routes>
    </>
  );
}
