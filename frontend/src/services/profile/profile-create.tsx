import { profiletype } from "../../types/profile-type";
import { handleSucess } from "../../components/notification/sucess-toastify";
import { handleErrorToast } from "../../components/notification/error-toastify";
const ProfileCreate = async (profileData: profiletype) => {
  const response = await fetch("http://localhost:5000/profile/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });
  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }
  console.log(result);
  handleSucess("Sucess Create Profile");
  return result;
};

export default ProfileCreate;
