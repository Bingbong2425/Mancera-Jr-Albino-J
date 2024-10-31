import ChatBoxModalAtom from "../../hooks/modal-atom/chat-box-modal-atom";
import { profiletype } from "../../types/profile-type";
import GetMessage from "../../services/message/messages";
import { useEffect, useState } from "react";
import GetProfile from "../../services/profile/get-profile-token";
interface ProfileDisplayProps {
  profileData?: profiletype;
  roomid: string;
  receiverid: string | undefined;
}

const ChatBox: React.FC<ProfileDisplayProps> = ({
  profileData,
  roomid,
  receiverid,
}) => {
  const [input, setInput] = useState<string>("");
  const { open, handleCLose } = ChatBoxModalAtom();
  const { profile } = GetProfile();
  const { message, handleMessage } = GetMessage(roomid, receiverid);
  return (
    <div>
      {open && (
        <div className="bg-[#fff] shadow-lg shadow-[#dbdbdb] h-96	w-[300px]">
          <div className="flex items-center justify-between p-2 bg-[#f5f5f5] shadow-lg shadow-[#f7f6f6]">
            <div className="flex items-center gap-3 ">
              <div>
                <img
                  src={profileData?.profile}
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div>
                <h1 className="text-base font-semibold">{profileData?.name}</h1>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-[#05f] cursor-pointer"
                onClick={handleCLose}
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </div>
          </div>
          <div className="h-[275px] p-2 mt-1 w-full overflow-auto">
            <div>
              {message.map((item) => (
                <div>
                  <div>
                    {item.userid == profile?.userid ? (
                      <div className="flex items-end justify-end">
                        <div className="bg-[#05f] p-2 rounded-lg mt-5">
                          <h1 className=" font-bold text-white">
                            {item.message}
                          </h1>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="bg-[#eeeeee] p-2 rounded-lg w-fit mt-5">
                          <h1 className=" font-bold">{item.message}</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center p-2 ">
            <div className="w-full">
              <div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="font-semibold font-fredoka w-full py-1 p-2  bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
                  placeholder="Aa"
                />
              </div>
            </div>
            <div onClick={() => handleMessage(input)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-[#05f] cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
