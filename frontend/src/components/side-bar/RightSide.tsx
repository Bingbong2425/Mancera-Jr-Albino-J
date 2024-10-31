import GetUserAll from "../../services/profile/get-user-all";
import ChatBoxModalAtom from "../../hooks/modal-atom/chat-box-modal-atom";
import GetProfile from "../../services/profile/get-profile-token";
import GetProfileId from "../../services/profile/get-profile-id";
import ChatBox from "../chatbox/chat-box";
import RoomIdHook from "../../hooks/message/room-id-hook";
import { useState } from "react";
import Online_Offline from "../../hooks/online-socket/online-offline";
import { socket } from "../../services/message/messages";
const RightSide = () => {
  const { userProfile } = GetUserAll();
  const { profile } = GetProfile();
  const { handleOpen, count, receiver } = ChatBoxModalAtom();
  const { handleGetProfile, profileData } = GetProfileId();
  const { roomId, handleRoomId } = RoomIdHook();
  const { online } = Online_Offline();
  const [receiverId, setReceiverId] = useState<string | undefined>(undefined);
  const handleFetchOpen = (id: string | undefined) => {
    setReceiverId(id);
    handleGetProfile(id);
    handleOpen();
    const messageData = {
      senderid: profile?.userid,
      receiverid: id,
    };
    handleRoomId(messageData);
  };
  const handleSocket = (receiverId: string | undefined) => {
    socket.emit("seen", {
      roomid: roomId,
      receiver: receiverId,
      userid: profile?.userid,
    });
  };

  return (
    <div className="relative">
      <div className="lg:block overflow-scroll h-[100vh]   fixed top-[106px]  right-0 z-30 px-2 w-[20%]   mb-10">
        <div className="mb-24">
          <div className=" bg-white h-auto p-3 rounded-xl 	">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm text-[#212529] font-bold">Contact</h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="text-xl text-[#ced4da]"
                >
                  <rect width="512" height="512" fill="none" />
                  <path
                    fill="currentColor"
                    d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"
                  />
                </svg>
              </div>
            </div>
            <div className="border-b-[1px] border-[#adb5bd ] mt-6"></div>

            <div>
              {userProfile
                .filter((user) => user.userid !== profile?.userid)
                .map((user) => {
                  const findById = online.some(
                    (item: any) => item.userid == user.userid
                  );
                  return (
                    <div
                      className="flex items-center gap-3 mt-5 justify-between"
                      onClick={() => {
                        handleFetchOpen(user.userid);
                        handleSocket(user.userid);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            src={user.profile}
                            className="w-[40px] h-[40px] rounded-full "
                          />
                        </div>
                        <div>
                          <p className="text-sm text-[#212529] font-semibold">
                            {user.name}
                          </p>
                        </div>
                        <div>
                          {/* {user.userid == receiver ? `(${count})` : `(0)`} */}
                        </div>
                      </div>
                      <div>
                        {findById ? (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                              className="text-2xl text-green-800"
                            >
                              <rect width="48" height="48" fill="none" />
                              <path
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="4"
                                d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 48 48"
                              className="text-2xl text-red-800"
                            >
                              <rect width="48" height="48" fill="none" />
                              <path
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="4"
                                d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* <div className=" bg-white h-auto p-3 rounded-xl 	mt-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm text-[#212529] font-bold">
                  Friend Request
                </h1>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1e74fd]">See all</p>
              </div>
            </div>
            <div className="border-b-[1px] border-[#adb5bd ] mt-6"></div>
            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-7.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  Anthony Daugloi{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-8.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  Christalyn De Guzman
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-12.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  Mohannad Zitoun
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-white h-auto p-3 rounded-xl mt-10	">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm text-[#212529] font-bold">
                  Suggest Friends
                </h1>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1e74fd]">See all</p>
              </div>
            </div>
            <div className="border-b-[1px] border-[#adb5bd ] mt-6"></div>
            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-9.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  Goria Coast
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-11.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  Victor Exrixon
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-4.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  Hurin Seary
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <div>
                <img
                  src="https://uitheme.net/sociala/images/user-3.png"
                  className="w-[40px] h-[40px] rounded-full "
                />
              </div>
              <div>
                <p className="text-sm text-[#212529] font-semibold">
                  David Goria
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-white h-auto p-3 rounded-xl mt-10	">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm text-[#212529] font-bold">
                  Suggest Room
                </h1>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1e74fd]">See all</p>
              </div>
            </div>

            <div className="mt-5">
              <img
                src="https://uitheme.net/sociala/images/e-2.jpg"
                className="w-full h-32	rounded-xl		"
              />
            </div>

            <div className="mt-5 bg-[#4ad900] text-center p-2 rounded-xl  ">
              <button className="text-sm font-bold text-white">
                JOIN ROOM
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="fixed bottom-0 right-64  z-50">
        <ChatBox
          profileData={profileData}
          roomid={roomId}
          receiverid={receiverId}
        />
      </div>
    </div>
  );
};

export default RightSide;
