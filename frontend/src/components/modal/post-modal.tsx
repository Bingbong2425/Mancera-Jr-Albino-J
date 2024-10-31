import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreatePostHook from "../../hooks/post/create-post-hook";
import Typography from "@mui/material/Typography";
import { PostModalProps } from "../../types/postmodalprops";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
};
const PostModal: React.FC<PostModalProps> = ({
  handleClose,
  modalOpen,
  data,
}) => {
  const [text, setText] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const photoRef = useRef<HTMLInputElement | null>(null);
  const handleClickPhoto = () => {
    photoRef.current?.click();
  };
  const handleFileChangePhoto = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const { handleCreatePost } = CreatePostHook(handleClose);

  const postData = {
    name: data?.name,
    userid: data?.userid,
    userphoto: data?.profile,
    text: text,
    photo: photo,
  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="w-full flex items-center justify-between">
              <div className="flex-grow flex items-center justify-center">
                <h1 className="text-xl font-semibold">Create Post</h1>
              </div>
              <div
                className="flex items-center justify-end bg-[#cfcfcf] p-2 rounded-full"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-lg cursor-pointer"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="mt-12">
              <div>
                <textarea
                  className=" font-semibold w-full outline-none  h-[80px]    text-[#000] 	 placeholder-[#adb5bd]"
                  placeholder="What's on your mind?"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-1">
                <div>
                  <img src={photo} className="w-full h-72  	" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between  border-2 border-[#bbbbbb] p-3 rounded-lg	">
                <div>
                  <h1 className="text-sm font-semibold">Add to your post</h1>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-2xl text-[#10d876] cursor-pointer"
                      onClick={handleClickPhoto}
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </g>
                    </svg>

                    <input
                      type="file"
                      ref={photoRef}
                      onChange={handleFileChangePhoto}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              <div>
                {text.length == 0 ? (
                  <div>
                    <div className="text-center mt-5 w-full p-2 bg-[#dddddd]  rounded-lg">
                      <button
                        className="font-semibold text-[#cdcdcd]"
                        disabled={true}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div
                      className="text-center mt-5 w-full p-2 bg-[#05f]  rounded-lg"
                      onClick={() => handleCreatePost(postData)}
                    >
                      <button className="font-semibold text-white">Next</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PostModal;
