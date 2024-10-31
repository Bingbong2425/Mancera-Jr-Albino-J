import { Link } from "react-router-dom";
import GetPost from "../../services/post/get-all-post";
import PostContentModalAtom from "../../hooks/modal-atom/post-content-modal-atom-hook";
import PostContentModal from "../modal/post-content-modal";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import GetProfile from "../../services/profile/get-profile-token";
import HeartAddHook from "../../hooks/heart/heart-add-hook";
import HeartDeleteHook from "../../hooks/heart/heart-delete-hook";
import DeletePostModal from "../modal/delete-post-modal";
import DeleteModalAtom from "../../hooks/modal-atom/delete-modal-atom";
const Post = () => {
  const { postData, postLoading } = GetPost();
  const { openModal } = PostContentModalAtom();
  const { profile } = GetProfile();
  const { handleHeart } = HeartAddHook();
  const { handleDeleteHeart } = HeartDeleteHook();
  const { postId, handleOpen } = DeleteModalAtom();

  const handleAddHeart = (postid: string) => {
    const heartData = {
      userid: profile?.userid,
      postid: postid,
    };

    handleHeart(heartData);
  };

  const deleteHeart = (postid: string) => {
    const heartData = {
      userid: profile?.userid,
      postid: postid,
    };

    handleDeleteHeart(heartData);
  };
  return (
    <div>
      {postLoading ? (
        <div className="w-full  flex items-center justify-center flex-col">
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={60} height={60} />

            <Skeleton variant="rectangular" width={500} height={70} />
            <Skeleton variant="rounded" width={500} height={70} />
          </Stack>
        </div>
      ) : (
        <div>
          {postData?.map((item: any) => {
            const isHeartedByCurrentUser = Object.values(item.userheart).some(
              (heart: any) => heart.userid == profile?.userid
            );
            return (
              <div className="mt-10 bg-white h-auto p-4 rounded-xl w-full	relative">
                <div className="flex items-center justify-between">
                  <Link to={`/user/${item.userid}`}>
                    <div className="flex items-center gap-5">
                      <div>
                        <img
                          src={item?.userphoto}
                          className="w-[45px] h-[45px] rounded-full"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold">{item?.name}</h1>
                      </div>
                    </div>
                  </Link>
                  <div>
                    <div>
                      {profile?.userid == item.userid ? (
                        <div
                          className="bg-[#f5f5f5] p-3 rounded-full cursor-pointer"
                          onClick={() => handleOpen(item.id, item.cloudinaryid)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="text-2xl "
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
                            />
                          </svg>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>{postId == item.id ? <DeletePostModal /> : ""}</div>
                  </div>
                </div>
                <div className="mt-2">
                  <p
                    className="text-[#000] text-sm leading-7 font-medium	 "
                    onClick={() => openModal(item?.id)}
                  >
                    {item?.text}
                  </p>
                </div>

                <div className="mt-5 w-full">
                  {item?.photo == "" ? (
                    ""
                  ) : (
                    <img
                      src={item?.photo}
                      className="w-full h-64	rounded-lg md:h-96	lg:h-72 xl:h-[400px]		"
                      onClick={() => openModal(item?.id)}
                    />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <div className="p-2 rounded-full cursor-pointer bg-[#e4e4e4]">
                    {isHeartedByCurrentUser ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        className="text-xl "
                        onClick={() => deleteHeart(item.id)}
                      >
                        <path
                          fill="#f8312f"
                          d="M21.008 5.162c-2.84.509-5.011 3.905-5.011 3.905s-2.18-3.396-5.012-3.905c-7.012-1.25-9.903 4.993-8.732 9.64c1.73 6.863 10.053 13.014 12.834 14.916c.55.376 1.27.376 1.83 0c2.791-1.902 11.113-8.053 12.834-14.916c1.16-4.647-1.73-10.89-8.743-9.64"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-xl text-[#e93838]"
                        onClick={() => handleAddHeart(item.id)}
                      >
                        <path
                          fill="currentColor"
                          d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-[#212529] text-sm font-semibold">
                      Heart {item.countheart}
                    </p>
                  </div>
                  <div onClick={() => openModal(item?.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-2xl  "
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"
                      />
                    </svg>
                  </div>
                  <div>
                    {Object.keys(item.comments).length > 0 && (
                      <div>
                        <p
                          className="text-[#212529] text-sm font-semibold"
                          onClick={() => openModal(item.id)}
                        >
                          Comments (
                          {Object.keys(item.comments).length === 0
                            ? "0"
                            : Object.keys(item.comments).length}
                          )
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <PostContentModal />
      </div>
    </div>
  );
};

export default Post;
