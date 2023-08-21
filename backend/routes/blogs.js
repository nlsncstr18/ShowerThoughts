const express = require("express");
const {
  createBlog,
  getBlogs,
  deleteBlog,
  getBlog,
} = require("../controllers/blogsController");
const router = express.Router();

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlog);

router.delete("/:id", deleteBlog);

// router.patch("/:id", (req, res) => {
//   res.json({ msg: "UPDATE A BLOG" });
// });

module.exports = router;
