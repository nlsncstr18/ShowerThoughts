import React from "react";
import { useState, useContext } from "react";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useThoughtsContext } from "../hooks/useBlogsContext";
const BlogDetails = ({ blog }) => {
  const { dispatch } = useThoughtsContext();
  const handleDelete = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/blogs/" + blog._id,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="m-10 shadow-2xl shadow-black backdrop-blur-xl p-1 bg-white/10 rounded-md ">
      <div className="w-72 max-h-32 p-8 overflow-y-auto font-semibold">
        <h1>{blog.title}</h1>

        <p className="text-xs text-right m-1">
          {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
        </p>
      </div>
      <div className="flex justify-between">
        <button className=" rounded-md font-semibold text-sm">Remind Me</button>
        <button
          onClick={handleDelete}
          className="rounded-md font-medium text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
