import { useState } from "react";
import GetProfile from "../../services/profile/get-profile-token";
import PostModal from "../modal/post-modal";
const CreatePost = () => {
  const { profile } = GetProfile();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleClose = () => setModalOpen(false);
  return (
    <div>
      <div className="mt-24 bg-white h-auto p-4 rounded-xl 	">
        <div className="relative mt-5">
          <div className="absolute top-0 z-20 px-2 py-2 ">
            <img
              src={profile?.profile}
              className="w-[35px] h-[35px] rounded-full"
            />
          </div>
          <div className="relative ">
            <textarea
              className="font-semibold w-full px-12 py-3 h-[110px]   border-2 border-[#f1f1f1]  text-[#adb5bd] rounded-2xl	 placeholder-[#adb5bd]"
              placeholder="What's on your mind?"
              onClick={() => setModalOpen(true)}
            ></textarea>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-5 cursor-pointer">
          <div
            className="md:flex md:items-center md:gap-2"
            onClick={() => setModalOpen(true)}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-[#10d876]"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </g>
              </svg>
            </div>
            <div>
              <p className="md:block text-sm font-semibold text-[#495057] max-md:hidden">
                Photo/Video
              </p>
            </div>
          </div>
        </div>
        <PostModal
          handleClose={handleClose}
          modalOpen={modalOpen}
          data={profile}
        />
      </div>
    </div>
  );
};

export default CreatePost;
