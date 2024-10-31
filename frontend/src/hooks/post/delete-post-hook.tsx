import { DeletePost } from "../../services/post/delete-post";
import { deleteposttype } from "../../types/delete-post-type";
const DeletePostHook = () => {
  const handleDeletePost = async (deleteData: deleteposttype) => {
    try {
      await DeletePost(deleteData);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { handleDeletePost };
};

export default DeletePostHook;
