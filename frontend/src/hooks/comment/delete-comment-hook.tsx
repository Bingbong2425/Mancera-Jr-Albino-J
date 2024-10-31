import React from "react";
import { deletecommenttype } from "../../types/delete-comment-type";
import DeleteComment from "../../services/comment/delete-comment";
const DeleteCommentHook = () => {
  const handleDelete = async (deleteData: deletecommenttype) => {
    try {
      console.log(deleteData);
      await DeleteComment(deleteData);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { handleDelete };
};

export default DeleteCommentHook;
