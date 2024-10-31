import cookies from "../../utils/cookies/cookies";
import { useNavigate } from "react-router-dom";
import GetProfile from "../../services/profile/get-profile-token";
import { socket } from "../../services/message/messages";
const Logout = () => {
  const { profile } = GetProfile();
  const navigate = useNavigate();
  const handleLogout = () => {
    handleOffline(profile?.userid);
    cookies.remove("id");
    cookies.remove("login");
    cookies.remove("token");
    navigate("/");
    window.location.reload();
  };

  const handleOffline = (id: string | undefined) => {
    socket.emit("offline", {
      userid: id,
    });
  };
  return { handleLogout };
};

export default Logout;
