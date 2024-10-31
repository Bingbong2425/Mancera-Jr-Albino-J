import { handleSucess } from "../../components/notification/sucess-toastify";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { deletecommenttype } from "../../types/delete-comment-type";
const DeleteComment = async (deleteData: deletecommenttype) => {
  const response = await fetch(
    `http://localhost:5000/post/${deleteData.postId}/comment/${deleteData.commentId}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }
  handleSucess("Delete Sucessfuly");
};

export default DeleteComment;
