import React from "react";
import { cloudinaryId, getId } from "../../state/delete-post-atom";
import { useAtom } from "jotai";
const DeleteModalAtom = () => {
  const [postId, setPostId] = useAtom(getId);
  const [cloudinary, setCloudinary] = useAtom(cloudinaryId);
  const handleOpen = (id: string, cloudinaryId: string) => {
    setPostId(id);
    setCloudinary(cloudinaryId);
  };
  const handleCLose = () => {
    setPostId(null);
  };

  return { handleCLose, postId, handleOpen, cloudinary };
};

export default DeleteModalAtom;
