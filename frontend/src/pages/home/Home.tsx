import React, { useEffect, useState } from "react";
import Header from "../../components/home-header/Header";
import RingLoader from "react-spinners/RingLoader";
import Footer from "../../components/footer/Mobile-Footer";
import LeftSide from "../../components/side-bar/LeftSide";
import RightSide from "../../components/side-bar/RightSide";
import Post from "../../components/post/Post";
import CreatePost from "../../components/create-post/CreatePost";
import { Toaster } from "react-hot-toast";
import SearchBoxAtom from "../../hooks/modal-atom/search-box-atom";
import GetProfile from "../../services/profile/get-profile-token";
import { socket } from "../../services/message/messages";
const Home = () => {
  const { handleCloseSearchBox } = SearchBoxAtom();
  const { profile } = GetProfile();

  useEffect(() => {
    socket.emit("notifications", {
      roomid: profile?.userid,
      id: null,
      userpostid: null,
      postid: null,
      commentuserid: null,
      commentprofile: null,
      commentname: null,
      date: null,
    });
  });
  return (
    <div className="w-full">
      <div className="h-[100%] w-full bg-[#f7f7f7] ">
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <div className="fixed top-0 left-0 w-full bg-white  z-50">
          <Header />
        </div>
        <div
          className="lg:w-full lg:flex  lg:gap-2 h-auto "
          onClick={handleCloseSearchBox}
        >
          <div className="lg:w-[30%] max-lg:hidden xl:w-[20%] xl:mr-10 ">
            <LeftSide />
          </div>

          <div className="pt-[10px] w-full px-5 scroll-smooth h-auto py-20 lg:w-[50%]   lg:px-1 xl:w-[55%]">
            <>
              <CreatePost />
            </>
            <div className="mt-10 w-full ">
              <>
                <Post />
              </>
            </div>
            <div className="mt-10 bg-white h-auto p-4 rounded-xl flex items-center justify-center ">
              <RingLoader
                color="#1e74fd"
                loading={true}
                size={35}
                className="p-3"
              />
            </div>
          </div>

          <div className="w-[20%] max-lg:hidden">
            <RightSide />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full   z-50 lg:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
