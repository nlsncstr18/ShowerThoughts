import React, { useState } from "react";

const BlogForms = () => {
  const [title, setTitle] = useState("");

  const [error, setError] = useState(null);
  const OnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  //submitting data to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title };

    const response = await fetch(
      "https://shower-thoughts-rzxf.onrender.com/api/blogs",
      {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("new blog added", json);
      setTitle("");
    }
  };

  return (
    <div className="shadow-2xl shadow-black sm:h-1/3 sm:w-1/4 rounded-md bg-white/10  backdrop-blur-lg">
      <form
        className="flex flex-col w-full h-full justify-center items-center"
        onSubmit={handleSubmit}
      >
        <textarea
          onChange={OnChangeTitle}
          value={title}
          placeholder="Your Shower Thought..."
          className="font-light bg-transparent text-white outline-none border-none p-10 w-full text-center relative resize-none"
        />

        <button className="font-extrabold font-serif">Add Thought</button>
      </form>
    </div>
  );
};

export default BlogForms;
