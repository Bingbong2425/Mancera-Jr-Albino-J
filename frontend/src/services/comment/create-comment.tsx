import { handleSucess } from "../../components/notification/sucess-toastify";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { commenttype } from "../../types/comment-type";
const CreateComment = async (commendData: commenttype) => {
  const response = await fetch("http://localhost:5000/post/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commendData),
  });

  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }

  handleSucess("Comment Sucessfuly");
};

export default CreateComment;
