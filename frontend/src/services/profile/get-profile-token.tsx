import { useEffect, useState } from "react";
import { profiletype } from "../../types/profile-type";
import cookies from "../../utils/cookies/cookies";
const GetProfile = () => {
  const [profile, setProfile] = useState<profiletype>();
  useEffect(() => {
    const token = cookies.get("token");
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${token}`);
        if (!response.ok) {
          console.log("error");
        }
        const result: profiletype = await response.json();
        setProfile(result);
      } catch {
        console.log("catch error");
      }
    };
    fetchProfile();
  }, []);

  return { profile };
};

export default GetProfile;
