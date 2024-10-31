import { handleErrorToast } from "../../components/notification/error-toastify";
import { handleSucess } from "../../components/notification/sucess-toastify";
import { forgotpasswordtype } from "../../types/forgot-password-type";
const UpdatePassword = async (password: forgotpasswordtype, id: string) => {
  const response = await fetch(`http://localhost:5000/user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password.password,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  } else {
    handleSucess("password change successfully");
    return result; // Return the response if needed
  }
};

export default UpdatePassword;
