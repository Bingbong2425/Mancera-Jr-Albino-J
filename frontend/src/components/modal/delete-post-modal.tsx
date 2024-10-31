import DeletePostHook from "../../hooks/post/delete-post-hook";
import DeleteModalAtom from "../../hooks/modal-atom/delete-modal-atom";
const DeletePostModal = () => {
  const { handleDeletePost } = DeletePostHook();
  const { handleCLose, postId, cloudinary } = DeleteModalAtom();
  const handleDeleteData = () => {
    const data = {
      postid: postId,
      cloudinaryid: cloudinary,
    };
    handleDeletePost(data);
  };

  return (
    <div className="bg-white rounded-lg  shadow-lg shadow-[#949292] h-auto absolute  right-5 w-[200px] p-3 cursor-pointer">
      <div className="flex items-end  justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-xl mb-2"
          onClick={handleCLose}
        >
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      </div>
      <div
        className="flex items-center gap-2  border-b-2 border-[#ececec] pb-4"
        onClick={handleDeleteData}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-2xl text-black"
          >
            <path
              fill="currentColor"
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-base	 font-">Delete post</h1>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;
