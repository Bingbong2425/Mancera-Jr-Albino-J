import { Link } from "react-router-dom";
import GetProfile from "../../services/profile/get-profile-token";
import cookies from "../../utils/cookies/cookies";

const LeftSide = () => {
  const { profile } = GetProfile();
  const id = cookies.get("id");
  return (
    <div className="lg:block h-screen  fixed top-[106px]  left-0 z-30 px-2 lg:w-[30%] xl:w-[20%]">
      <div className="bg-white h-auto p-4 rounded-xl 	">
        <div>
          <h1 className="text-sm text-[#adb5bd] font-semibold">News Feeds</h1>
        </div>
        <Link to={`/user/${id}`}>
          <div className="flex items-center mt-5 gap-4">
            <div className="p-1">
              <img
                src={profile?.profile}
                className="w-[40px] h-[40px] rounded-full "
              />
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[#888]">
                {profile?.name}
              </p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center mt-5 gap-4">
            <div className="bg-[#061b9a] p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-white"
              >
                <rect width="24" height="24" fill="none" />
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                  <path d="m17 2l-5 5l-5-5" />
                </g>
              </svg>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[#888]">Newsfeed</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;
