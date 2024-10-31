import { handleErrorToast } from "../../components/notification/error-toastify";
import { handleSucess } from "../../components/notification/sucess-toastify";
import { recoverytype } from "../../types/recover-type";
const SendEmail = async (email: recoverytype) => {
  const response = await fetch("http://localhost:5000/user/sendemail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.email }),
  });
  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  } else {
    handleSucess("send email successfully");
    return result; // Return the response if needed
  }
};

export default SendEmail;
