import React from "react";
import { NavSt, Blogs } from "../components";
import BlogContentPage from "./BlogContentPage";

const Homepage = ({blogs}) => {
  console.log("Homepage");
  console.log(blogs);
  return (
    <div>
      {" "}
      <NavSt />
      <Blogs blogs={blogs?blogs:""}/>
    </div>
  );
}

export default Homepage;
