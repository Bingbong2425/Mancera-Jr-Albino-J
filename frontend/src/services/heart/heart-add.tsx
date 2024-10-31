import { handleSucess } from "../../components/notification/sucess-toastify";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { hearttype } from "../../types/heart-type";
const HeartAdd = async (heartData: hearttype) => {
  const response = await fetch("http://localhost:5000/post/heart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(heartData),
  });

  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }
  handleSucess("Heart React");

  return result;
};

export default HeartAdd;
