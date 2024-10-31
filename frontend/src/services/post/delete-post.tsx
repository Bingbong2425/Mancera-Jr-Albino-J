import { handleSucess } from "../../components/notification/sucess-toastify";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { deleteposttype } from "../../types/delete-post-type";
export const DeletePost = async (deleteData: deleteposttype) => {
  const response = await fetch("http://localhost:5000/post/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deleteData),
  });
  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }
  handleSucess("Post Deleted");
  return result;
};
