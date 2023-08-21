import React from "react";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
const BlogDetails = ({ blog }) => {
  return (
    <div className="shadow-2xl shadow-black m-10 w-72 h-28 p-8 rounded-md bg-white/10  backdrop-blur-xl">
      <h1>{blog.title}</h1>

      <p className="text-xs text-right ">
        {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default BlogDetails;
