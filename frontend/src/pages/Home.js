import React from "react";
import { useEffect, useState } from "react";

//components
import BlogDetails from "../components/BlogDetails";
import BlogForms from "../components/BlogForms";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  //calling the api
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        "https://shower-thoughts-rzxf.onrender.com/api/blogs"
      );
      const json = await response.json();

      if (response.ok) {
        setBlogs(json);
      }
    };
    fetchBlog();
  });
  return (
    <>
      <div className="flex flex-col p-10 items-center">
        <BlogForms />
        <div className="">
          {blogs &&
            blogs.map((blog) => <BlogDetails key={blogs._id} blog={blog} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
