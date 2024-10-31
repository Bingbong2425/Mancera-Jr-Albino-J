import { profiletype } from "../../types/profile-type";
import { useState } from "react";
const GetProfileId = () => {
  const [profileData, setProfileData] = useState<profiletype>();

  const handleGetProfile = async (id: string | any) => {
    try {
      const response = await fetch(`http://localhost:5000/profile/user/${id}`);

      if (!response.ok) {
        console.log("error");
      }
      const result: profiletype = await response.json();
      setProfileData(result);
    } catch (err: any) {
      console.log(err);
    }
  };

  return { profileData, handleGetProfile };
};

export default GetProfileId;
