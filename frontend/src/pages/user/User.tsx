import Header from "../../components/home-header/Header";
import Footer from "../../components/footer/Mobile-Footer";
import LeftSide from "../../components/side-bar/LeftSide";
import percent from "../../assets/100percent.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "../../components/create-post/CreatePost";
import GetAllPostUserId from "../../services/post/get-all-post-user-id-post";
import PostContentModalAtom from "../../hooks/modal-atom/post-content-modal-atom-hook";
import PostContentModal from "../../components/modal/post-content-modal";
import HeartAddHook from "../../hooks/heart/heart-add-hook";
import HeartDeleteHook from "../../hooks/heart/heart-delete-hook";
import GetProfile from "../../services/profile/get-profile-token";
import DeletePostModal from "../../components/modal/delete-post-modal";
import DeleteModalAtom from "../../hooks/modal-atom/delete-modal-atom";
import GetProfileId from "../../services/profile/get-profile-id";
import SearchBoxAtom from "../../hooks/modal-atom/search-box-atom";
const User = () => {
  const { handleCloseSearchBox } = SearchBoxAtom();
  const { openModal } = PostContentModalAtom();
  const { id } = useParams<{ id: string | any }>();
  const { postProfile } = GetAllPostUserId(id);
  const { handleHeart } = HeartAddHook();
  const { handleDeleteHeart } = HeartDeleteHook();
  const { profile } = GetProfile();
  const { postId, handleOpen } = DeleteModalAtom();
  const { profileData, handleGetProfile } = GetProfileId();

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

  useEffect(() => {
    if (id) {
      handleGetProfile(id);
    }
  }, []);
  return (
    <div>
      <div className="h-[100%] w-full bg-[#fbfcfe]">
        <div className="fixed top-0 left-0 w-full bg-white  z-50 ">
          <Header />
        </div>

        <div
          className="w-full lg:flex  lg:gap-2 h-auto  xl:gap-32"
          onClick={handleCloseSearchBox}
        >
          <div className="lg:w-[30%] max-lg:hidden xl:w-[20%]">
            <LeftSide />
          </div>
          <div className="pt-[10px] w-full px-5  lg:scroll-smooth h-auto py-20 lg:w-[70%] xl:w-full  lg:px-1 ">
            <div className="mt-20 bg-white h-auto p-4 rounded-xl relative 	">
              <div className="w-full relative">
                <div>
                  <img
                    src={profileData?.background}
                    className="w-full  h-60	rounded-xl	object-cover"
                  />
                </div>
                <div className="absolute bottom-[-50px] left-2 p-1 bg-[#f7f7f7] rounded-full">
                  <img
                    src={profileData?.profile}
                    className="h-24	 w-24	 rounded-full"
                  />
                </div>
              </div>

              <div className="mt-3 ml-32  ">
                <h1 className="  text-xl font-bold">{profile?.name}</h1>
              </div>
              <div className="mt-5 border-t-2 border-[#f1f1f1] ">
                <div>
                  <h1 className="text-sm font-bold mt-2  border-b-2 border-[#000] pb-3 w-fit"></h1>
                </div>
              </div>
            </div>

            <div className=" lg:flex  lg:item-center  lg:justify-center  lg:gap-3">
              <div className=" lg:w-[30%]">
                <div className="mt-8 bg-white h-auto p-4 rounded-xl ">
                  <div>
                    <h1 className="text-sm font-bold ">About</h1>
                  </div>
                  <div className="mt-5 border-b-2 pb-5 border-[#f1f1f1]">
                    <p className="text-sm font-medium text-[#adb5bd] leading-6	tracking-wide	lg:text-xs	xl:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor, ornare at commodo non, feugiat non
                      nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa sed rhoncus
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-3xl  text-[#adb5bd]"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path
                          fill="currentColor"
                          d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-2.05V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95m6.9-2.55q.5-.55.9-1.187t.662-1.325t.4-1.413T20 12q0-2.45-1.363-4.475T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className=" font-bold text-sm">Public</h1>
                      <p className="text-[#adb5bd] font-medium text-sm ">
                        What's up, how are you?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 14 14"
                        className="text-3xl  text-[#adb5bd]"
                      >
                        <rect width="14" height="14" fill="none" />
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M13.23 6.246c.166.207.258.476.258.754c0 .279-.092.547-.258.754C12.18 9.025 9.79 11.5 7 11.5S1.82 9.025.77 7.754A1.2 1.2 0 0 1 .512 7c0-.278.092-.547.258-.754C1.82 4.975 4.21 2.5 7 2.5s5.18 2.475 6.23 3.746" />
                          <path d="M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h1 className=" font-bold text-sm">Visble</h1>
                      <p className="text-[#adb5bd] font-medium text-sm ">
                        Anyone can find you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        className="text-3xl  text-[#adb5bd]"
                      >
                        <rect width="32" height="32" fill="none" />
                        <path
                          fill="currentColor"
                          d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                        />
                        <path
                          fill="currentColor"
                          d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className=" font-bold text-sm">Philippine </h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        className="text-3xl  text-[#adb5bd]"
                      >
                        <rect width="32" height="32" fill="none" />
                        <path
                          fill="currentColor"
                          d="M9 7c-3.3 0-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6 6 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.06 8.06 0 0 0 16 21.125a8.06 8.06 0 0 0-3.469-3.281A6 6 0 0 0 15 13c0-3.3-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4m14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className=" font-bold text-sm"> Genarel Group</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:w-[70%]">
                <CreatePost />
                <div className="mt-8 w-full ">
                  <div>
                    {postProfile.map((item: any) => {
                      const isHeartedByCurrentUser = Object.values(
                        item.userheart
                      ).some((heart: any) => heart.userid == profile?.userid);
                      return (
                        <div className="mt-10 bg-white h-auto p-4 rounded-xl w-full	">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                              <div>
                                <img
                                  src={item.userphoto}
                                  className="w-[45px] h-[45px] rounded-full"
                                />
                              </div>
                              <div>
                                <h1 className="font-semibold">{item.name}</h1>
                              </div>
                            </div>

                            <div>
                              <div>
                                {profile?.userid == item.userid ? (
                                  <div
                                    className="bg-[#f5f5f5] p-3 rounded-full cursor-pointer"
                                    onClick={() =>
                                      handleOpen(item.id, item.cloudinaryid)
                                    }
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
                              <div>
                                {postId == item.id ? <DeletePostModal /> : ""}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p
                              className="text-black text-sm leading-7	cursor-pointer"
                              onClick={() => openModal(item.id)}
                            >
                              {item.text}
                            </p>
                          </div>

                          <div className="mt-5 w-full">
                            {item.photo == "" ? (
                              ""
                            ) : (
                              <img
                                src={item.photo}
                                className="w-full h-64	rounded-lg md:h-96	lg:h-72		"
                                onClick={() => openModal(item.id)}
                              />
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-8">
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
                            <div>
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
                            <div onClick={() => openModal(item.id)}>
                              <p className="text-[#212529] text-sm font-semibold">
                                Comment
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full   z-50 lg:hidden">
          <Footer />
        </div>
      </div>
      <div>
        <PostContentModal />
      </div>
    </div>
  );
};

export default User;
