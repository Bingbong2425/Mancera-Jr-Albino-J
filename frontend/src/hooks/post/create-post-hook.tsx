import CreatePost from "../../services/post/create-post";
import { PostCreateType } from "../../types/post-create-type";

const CreatePostHook = (handleClose: () => void) => {
  const handleCreatePost = async (postData: PostCreateType) => {
    try {
      await CreatePost(postData);
      handleClose();
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { handleCreatePost };
};

export default CreatePostHook;
