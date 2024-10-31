import { Router } from "express";

import {
  CreatePost,
  GetUserByPostId,
  CreateComment,
  GetAllPost,
  GetByIdPost,
  DeleteComment,
  HeartAdd,
  HeartDelete,
  DeletePost,
} from "../controllers/post-controller";
const postRoutes = Router();
postRoutes.get("/get", GetAllPost);
postRoutes.get("/:id", GetByIdPost);
postRoutes.get("/user/:userid", GetUserByPostId);
postRoutes.post("/create", CreatePost);
postRoutes.post("/comment", CreateComment);
postRoutes.post("/heart", HeartAdd);
postRoutes.post("/heart/delete", HeartDelete);
postRoutes.post("/delete", DeletePost);
postRoutes.delete("/:postId/comment/:commentId", DeleteComment);
export default postRoutes;
