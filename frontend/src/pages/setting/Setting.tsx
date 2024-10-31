import React from "react";
import LeftSide from "../../components/side-bar/LeftSide";
import Header from "../../components/home-header/Header";
import Footer from "../../components/footer/Mobile-Footer";
import Button from "../../components/button/button";
import Logout from "../../components/button/logout-button";
const Setting = () => {
  const { handleLogout } = Logout();
  return (
    <div className="h-[100%] w-full bg-[#e8f1fa]">
      <div className="fixed top-0 left-0 w-full bg-white  z-50">
        <Header />
      </div>
      <div className="w-full lg:flex  lg:gap-2 h-auto  xl:gap-32">
        <div className="lg:w-[30%] max-lg:hidden xl:w-[20%]">
          <LeftSide />
        </div>
        <div className="pt-[10px] w-full px-5  lg:scroll-smooth h-auto py-20 lg:w-[70%] xl:w-[55%]  lg:px-1 ">
          <div className="mt-24 bg-white h-auto p-4 rounded-md">
            <div>
              <div>
                <h1 className="text-lg font-bold">Settings</h1>
                <p className="mt-4 font-semibold text-sm text-[#adb5bd] ">
                  General
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1e74fd] p-2 rounded-full	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-3xl text-white cursor-pointer"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">
                      Account Information
                    </h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f49c4d] p-2 rounded-full	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-3xl text-white cursor-pointer"
                    >
                      <rect width="24" height="24" fill="none" />
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">Saved Address</h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#e44d26] p-2 rounded-full	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-3xl text-white cursor-pointer"
                    >
                      <rect width="24" height="24" fill="none" />
                      <g fill="none" fill-rule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M17.817 6.989c-.353-.508-1.297-1.222-2.826-.914c-.892.179-1.425.62-1.764 1.202c-.361.62-.536 1.463-.536 2.444a1 1 0 0 1-1 1c-2.366 0-4.618-.703-6.513-2.604a10.5 10.5 0 0 0-.168 2.34c.053 1.086.312 2.175.927 3.108c.605.917 1.6 1.757 3.264 2.285a1 1 0 0 1 .41 1.655a8.5 8.5 0 0 1-1.796 1.405c1.06.11 2.082.118 3.03.032c1.92-.174 3.449-.723 4.405-1.5c2.013-1.632 3.09-4.066 2.89-8.144c-.034-.67.613-1.393.925-1.942c-.471.088-.943.072-1.248-.367M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113S3.141 8 3.343 7.115c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">Saved Address</h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-4 ">
              <div>
                <p className="font-semibold text-sm text-[#adb5bd] ">Account</p>
              </div>
              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#ee0979] p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                      className="text-3xl text-white cursor-pointer"
                    >
                      <rect width="512" height="512" fill="none" />
                      <rect
                        width="416"
                        height="320"
                        x="48"
                        y="96"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        rx="56"
                        ry="56"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="60"
                        d="M48 192h416M128 300h48v20h-48z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">
                      Account Information
                    </h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0575e6] p-2 rounded-full	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-3xl text-white"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">Saved Address</h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-4 ">
              <div>
                <p className="font-semibold text-sm text-[#adb5bd] ">Other</p>
              </div>
              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#f49c4d] p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-2xl text-white cursor-pointer"
                    >
                      <rect width="24" height="24" fill="none" />
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        color="currentColor"
                      >
                        <path d="M2.53 14.77c-.213 1.394.738 2.361 1.902 2.843c4.463 1.85 10.673 1.85 15.136 0c1.164-.482 2.115-1.45 1.902-2.843c-.13-.857-.777-1.57-1.256-2.267c-.627-.924-.689-1.931-.69-3.003C19.525 5.358 16.157 2 12 2S4.475 5.358 4.475 9.5c0 1.072-.062 2.08-.69 3.003c-.478.697-1.124 1.41-1.255 2.267" />
                        <path d="M8 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">
                      Account Information
                    </h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1e74fd] p-2 rounded-full	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-2xl text-white"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-sm	font-semibold">Help</h1>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 border-b-2 border-[#e1e1f0] py-2">
                <div className="flex items-center gap-4">
                  <div className="bg-[#e44d26] p-2 rounded-full	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-2xl text-white"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <Button
                      classname="text-sm	font-semibold"
                      buttonname="Logout"
                      onButtonClick={handleLogout}
                    />
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.5em"
                    height="1em"
                    viewBox="0 0 12 24"
                    className="text-2xl text-[#adb5bd]"
                  >
                    <rect width="12" height="24" fill="none" />
                    <defs>
                      <path
                        id="weuiArrowOutlined0"
                        fill="currentColor"
                        d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                      />
                    </defs>
                    <use
                      fill-rule="evenodd"
                      href="#weuiArrowOutlined0"
                      transform="rotate(-180 5.02 9.505)"
                    />
                  </svg>
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
  );
};

export default Setting;
