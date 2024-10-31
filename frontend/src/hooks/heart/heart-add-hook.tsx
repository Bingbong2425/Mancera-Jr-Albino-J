import React from "react";
import { hearttype } from "../../types/heart-type";
import HeartAdd from "../../services/heart/heart-add";
const HeartAddHook = () => {
  const handleHeart = async (heartData: hearttype) => {
    try {
      await HeartAdd(heartData);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { handleHeart };
};

export default HeartAddHook;
