import React from "react";
import { profiletype } from "../../types/profile-type";
import { useState, useEffect } from "react";
const GetUserAll = () => {
  const [userProfile, setUserProfile] = useState<profiletype[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/profile");

        if (response.ok) {
          console.log("error");
        }
        const result = await response.json();
        setUserProfile(result);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return { userProfile };
};

export default GetUserAll;
