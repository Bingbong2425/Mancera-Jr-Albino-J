import { hearttype } from "../../types/heart-type";
import HeartDelete from "../../services/heart/heart-delete";
const HeartDeleteHook = () => {
  const handleDeleteHeart = async (heartData: hearttype) => {
    try {
      await HeartDelete(heartData);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { handleDeleteHeart };
};

export default HeartDeleteHook;
