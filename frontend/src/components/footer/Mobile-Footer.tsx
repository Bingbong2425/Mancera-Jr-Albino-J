import { Link } from "react-router-dom";
import GetProfile from "../../services/profile/get-profile-token";
const Footer = () => {
  const { profile } = GetProfile();
  return (
    <div className="w-full py-3 px-3 transition-all duration-400 ease-in lg:py-5 lg:px-5 bg-[#1e74fd] ">
      <div className="flex items-center justify-between">
        <div className="p-1">
          <Link to="/home">
            {" "}
            <div>
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
          </Link>
        </div>

        <Link to={`/user/${profile?.userid}`}>
          <div>
            <img
              src={profile?.profile}
              className="w-[35px] h-[35px] rounded-full"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
