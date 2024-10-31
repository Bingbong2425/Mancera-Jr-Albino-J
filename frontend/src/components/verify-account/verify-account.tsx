import React, { useState, useRef } from "react";
import cookies from "../../utils/cookies/cookies";
import { profiletype } from "../../types/profile-type";
import ProfilleCreateHook from "../../hooks/profile/profile-create-hook";
import { useParams } from "react-router-dom";

const VerifyAccount = () => {
  const { id } = useParams();

  const { handleCreateProfile } = ProfilleCreateHook();

  const [profile, setProfile] = useState<string>(
    "https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
  );
  const [background, setBackground] = useState<string>(
    "https://img.freepik.com/free-vector/detailed-hand-painted-pink-watercolour-background_1048-17039.jpg"
  );
  const profileRef = useRef<HTMLInputElement | null>(null);
  const handleClickProfile = () => {
    profileRef.current?.click();
  };

  const handleFileChangeProfile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const backgroundRef = useRef<HTMLInputElement | null>(null);
  const handleClickBackground = () => {
    backgroundRef.current?.click();
  };

  const handleFileChangeBackground = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackground(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = () => {
    const data: profiletype = {
      userid: id,
      name: cookies.get("username"),
      profile: profile,
      background: background,
    };
    handleCreateProfile(data);
  };

  return (
    <div>
      <div className="w-full relative">
        <div>
          <img
            src={background}
            className="w-full  h-[500px]		rounded-xl	 cursor-pointer "
            alt="Profile"
            onClick={handleClickBackground}
          />
          <input
            type="file"
            ref={backgroundRef}
            onChange={handleFileChangeBackground}
            className="hidden"
          />
        </div>
        <div className="absolute bottom-[-50px] left-2 p-1 bg-[#f7f7f7] rounded-full">
          <div className="relative w-full">
            <img
              src={profile}
              alt="Profile"
              className="h-28 w-28 rounded-full "
              onClick={handleClickBackground}
            />

            <input
              type="file"
              ref={backgroundRef}
              onChange={handleFileChangeBackground}
              className="hidden"
            />
          </div>
          <div className="absolute bottom-3 right-0  p-1 bg-[#ebebeb] rounded-full">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer text-black hover:text-gray-800 text-2xl"
                onClick={handleClickProfile}
              >
                <rect width="24" height="24" fill="none" />
                <path d="M15 3a2 2 0 0 1 1.995 1.85L17 5a1 1 0 0 0 .883.993L18 6h1a3 3 0 0 1 2.995 2.824L22 9v9a3 3 0 0 1-2.824 2.995L19 21H5a3 3 0 0 1-2.995-2.824L2 18V9a3 3 0 0 1 2.824-2.995L5 6h1a1 1 0 0 0 1-1a2 2 0 0 1 1.85-1.995L9 3zm-3 7a3 3 0 0 0-2.985 2.698l-.011.152L9 13l.004.15A3 3 0 1 0 12 10" />
              </svg>

              <input
                type="file"
                ref={profileRef}
                onChange={handleFileChangeProfile}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 ml-40  ">
        <h1 className="  text-xl font-bold">{cookies.get("username")}</h1>
      </div>

      <div className="flex items-center justify-center gap-16 mt-10">
        <div className="bg-[#05f] py-3 px-3  rounded-lg ">
          <button
            className="font-bold text-white  w-[100px]"
            onClick={handleCreate}
          >
            Continue
          </button>
        </div>
        <div className="bg-[#da0000] py-3 px-3  rounded-lg">
          <button className="font-bold text-white  w-[100px]">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
