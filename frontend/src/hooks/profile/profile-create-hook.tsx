import { profiletype } from "../../types/profile-type";
import ProfileCreate from "../../services/profile/profile-create";
import cookies from "../../utils/cookies/cookies";
import { useNavigate } from "react-router-dom";
const ProfilleCreateHook = () => {
  const navigate = useNavigate();
  const handleCreateProfile = async (profileData: profiletype) => {
    try {
      await ProfileCreate(profileData);
      cookies.remove("username");
      navigate("/");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { handleCreateProfile };
};

export default ProfilleCreateHook;
