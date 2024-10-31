import React from "react";
import { commenttype } from "../../types/comment-type";
import CreateComment from "../../services/comment/create-comment";
const CreateCommentHook = () => {
  const handleComment = async (commentData: commenttype) => {
    try {
      await CreateComment(commentData);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { handleComment };
};

export default CreateCommentHook;
