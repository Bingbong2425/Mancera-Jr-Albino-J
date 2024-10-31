import { Link } from "react-router-dom";
import GetProfile from "../../services/profile/get-profile-token";
import SearchBox from "../search/search-box";
import { useEffect, useState } from "react";
import SearchBoxAtom from "../../hooks/modal-atom/search-box-atom";
import NotificationBox from "../notification/notification-box";
import { GetNotificationByID } from "../../services/notification/get-notification-by-id";
const Header = () => {
  const { profile } = GetProfile();
  const { handleGetNotification } = GetNotificationByID();
  const { handleOpenSearchBox, handleCloseSearchBox } = SearchBoxAtom();
  const [input, setInput] = useState<string>("");
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const handleOpenClose = () => {
    setNotificationOpen(!notificationOpen);
    handleGetNotification(profile?.userid);
  };

  const handleReload = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full py-3 px-3 transition-all duration-400 ease-in lg:py-5 lg:px-5 xl:bg-transparent max-xl:bg-white relative">
      <div className="w-full flex items-center justify-between">
        <div
          className="flex items-center gap-1 px-2 py-1"
          onClick={handleCloseSearchBox}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              className="text-3xl text-[#00f518] transition-all duration-400 ease-in lg:text-4xl"
            >
              <path
                fill="currentColor"
                d="M27.8 27.7L17.5 3.1c-.3-.7-.9-1.1-1.6-1.1s-1.3.4-1.6 1.1L3 30h3.9l4.5-11.1l13.3 10.7c.5.4.9.6 1.4.6c1 0 1.9-.7 1.9-1.8c0-.2-.1-.4-.2-.7M15.9 7.5l6.7 16.4L12.5 16z"
              />
            </svg>
          </div>
          <div>
            <h1
              className="text-2xl font-fredoka text-[#05f] font-semibold leading-5 transition-all duration-400 ease-in	lg:text-3xl"
              onClick={handleReload}
            >
              Santy's
            </h1>
          </div>
        </div>

        <div className="relative lg:block max-lg:hidden">
          <div className="absolute top-4 z-20 px-3  " onClick={handleOpenClose}>
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
          <div className="relative">
            <input
              onClick={handleOpenSearchBox}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" px-10 h-[48px] bg-[#eee]  border-2 border-[#eee]  placeholder-[#888] rounded-full w-[350px] font-medium	text-sm"
              placeholder="Start typing to search.."
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 lg:gap-5">
          <div>
            <div className="bg-[#f5f5f5] p-3 rounded-full cursor-pointer lg:hidden">
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
            <div className="max-lg:hidden" onClick={handleOpenClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl text-[#05f]"
              >
                <rect width="24" height="24" fill="none" />
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div>
            <div className="bg-[#f5f5f5] p-3 rounded-full cursor-pointer lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl  "
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M20 7H4m16 5H4m16 5H4"
                />
              </svg>
            </div>
            <div className="max-lg:hidden">
              <Link to="/setting">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                  className="text-3xl text-[#05f] animate-spin"
                >
                  <rect width="1024" height="1024" fill="none" />
                  <path
                    fill="currentColor"
                    d="m960.496 415.056l-82.129-18.224c-6.4-20.48-14.784-40.08-24.4-58.927l44.431-74.032c16.592-26.512 24.976-65.52 0-90.512l-45.28-45.248c-24.976-24.992-67.151-20.496-92.623-2.832l-72.032 45.887c-18.689-9.696-38.225-18-58.529-24.56l-18.431-83.12C605.999 33.009 579.343 0 543.999 0h-64c-35.344 0-57.008 33.504-64 64l-20.528 82.128c-21.68 6.912-42.496 15.744-62.336 26.208l-73.84-47.024c-25.456-17.664-67.648-22.16-92.624 2.832l-45.264 45.248c-24.992 25.008-16.608 64 0 90.512l46.752 77.92c-8.767 17.664-16.544 35.936-22.544 55.024l-82.112 18.224C33.007 420.56 0 447.216 0 482.56v64c0 35.344 33.504 57.008 64 64l83.152 20.784c5.745 17.632 12.928 34.56 21.056 50.976l-46.8 78c-16.591 26.496-24.975 65.504 0 90.496l45.28 45.248c24.976 25.008 67.152 20.496 92.624 2.847l74-47.152c19.952 10.528 40.88 19.44 62.704 26.337L416.495 960c7.008 30.496 28.656 64 64 64h64c35.344 0 62-33.007 67.504-63.504l18.464-83.343c20.096-6.496 39.376-14.689 57.84-24.257l72.192 46c25.472 17.664 67.664 22.16 92.624-2.848L898.4 850.8c24.976-25.008 16.592-64 0-90.496l-44.463-74.128c8.944-17.568 16.688-35.84 22.912-54.848L960 610.56c30.496-7.008 64-28.656 64-64v-64c0-35.344-32.992-62-63.504-67.504m-.465 126.992c-2.72 1.952-7.842 4.635-14.338 6.139l-118.656 29.631l-11.008 33.632c-4.975 15.153-11.407 30.529-19.119 45.712l-16.064 31.569l62.688 104.528c4 6.4 5.872 12.127 6.432 15.503l-42.096 42.033c-4.064-1.28-8.688-2.945-10.912-4.464l-105.344-67.184l-32.752 16.945c-15.776 8.192-31.969 14.976-48.097 20.192l-34.88 11.28l-26.368 119.12c-1.216 6.368-4.624 11.504-6.96 13.344h-57.6c-1.951-2.72-4.623-7.84-6.112-14.32L449.39 827.9l-34.095-10.817c-17.569-5.536-35.088-12.912-52.144-21.904l-32.912-17.376l-105.36 67.152c-4.304 2.912-8.912 4.56-13.088 4.56l-41.968-40.847c.56-3.311 2.304-8.783 5.792-14.367l65.456-109.056l-15.568-31.344c-7.264-14.784-13.024-28.656-17.504-42.4l-10.992-33.664L79.518 548.46c-7.392-1.68-12.736-4.432-15.52-6.4v-59.504a.3.3 0 0 0 .145.032c1.072 0 6.336-3.745 10.72-4.544l120.72-26.737l11.087-35.28c4.512-14.368 10.672-29.344 18.816-45.775l15.568-31.36l-64.767-107.92c-4.016-6.432-5.872-12.16-6.432-15.52l42.08-42.065c4.08 1.312 8.672 2.96 10.88 4.48l107.312 68.4l32.88-17.344c16.88-8.895 34.336-16.239 51.904-21.823l34.016-10.832L478.11 79.501c1.697-7.391 4.416-12.735 6.4-15.52H544c-.433.657 3.68 6.24 4.527 10.865l26.88 121.408l34.848 11.264c16.336 5.28 32.752 12.16 48.72 20.448l32.752 17.008l103.152-65.712c4.32-2.945 8.944-4.576 13.088-4.576l42 40.816c-.56 3.328-2.32 8.816-5.808 14.416l-63.344 105.488l16.16 31.616c8.72 17.056 15.376 33.056 20.32 48.928l11.056 35.344L946.64 477.55c7.153 1.328 12.721 5.456 13.905 7.696zM512.43 319.674c-106.272 0-192.736 86.288-192.736 192.32c0 106.016 86.464 192.304 192.736 192.304s192.736-86.288 192.736-192.304c0-106.032-86.464-192.32-192.736-192.32m-.432 320.32c-70.576 0-128-57.424-128-128c0-70.592 57.424-128 128-128c70.592 0 128 57.408 128 128c0 70.576-57.424 128-128 128"
                  />
                </svg>{" "}
              </Link>
            </div>
          </div>

          <Link to="/setting">
            <div className="max-lg:hidden">
              <img
                src={profile?.profile}
                className="w-[35px] h-[35px] rounded-full"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center top-[176px]">
        <SearchBox input={input} />
      </div>
      <div className="absolute top-20 right-32">
        <NotificationBox open={notificationOpen} />
      </div>
    </div>
  );
};

export default Header;
