const express=require('express')
const router = express.Router();
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} =require("../controllers/functions.js")




// GET, POST, DELETE, PUT, PATCH

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports=router;