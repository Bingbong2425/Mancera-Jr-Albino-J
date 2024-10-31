import { handleErrorToast } from "../../components/notification/error-toastify";
import { hearttype } from "../../types/heart-type";
const HeartDelete = async (heartData: hearttype) => {
  const response = await fetch("http://localhost:5000/post/heart/delete", {
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

  return result;
};

export default HeartDelete;
