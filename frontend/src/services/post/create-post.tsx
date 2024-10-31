import { handleSucess } from "../../components/notification/sucess-toastify";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { PostCreateType } from "../../types/post-create-type";
const CreatePost = async (postData: PostCreateType) => {
  const response = await fetch("http://localhost:5000/post/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }
  handleSucess("Post Created");

  return result;
};

export default CreatePost;
