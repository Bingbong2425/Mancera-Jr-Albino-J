import { signintype } from "../../types/sign-in-type";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { handleSucess } from "../../components/notification/sucess-toastify";
const SignIn = async (userData: signintype) => {
  const response = await fetch("http://localhost:5000/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  }
  handleSucess("sucess login");
  return result;
};

export default SignIn;
