import React from "react";
import { NavSt , Blogs, BlogContents } from "../components";


const BlogContentPage = ({blogs})=>{
  console.log("Blog content page");
  console.log(blogs);
  return (
    <div>
      {" "}
      <NavSt />
      <BlogContents />
    </div>
  );
}

export default BlogContentPage;
