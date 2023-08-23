import React, { useEffect, useState } from "react";
import BlogDetails from "../components/BlogDetails";
import BlogForms from "../components/BlogForms";
import { useThoughtsContext } from "../hooks/useBlogsContext";
const Home = () => {
  const { blogs, dispatch } = useThoughtsContext();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "/api/blogs"
        );
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_BLOGS", payload: json });
        }
      } catch (error) {
        console.error("An error occurred while fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div className="flex flex-col p-10 items-center">
      <BlogForms />

      <div className="">
        {loading ? (
          <p className="text-3xl m-10">Loading...</p>
        ) : (
          blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default Home;
