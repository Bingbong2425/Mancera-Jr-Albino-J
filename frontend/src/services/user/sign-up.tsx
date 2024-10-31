import { signuptype } from "../../types/sign-up-type";
import { handleErrorToast } from "../../components/notification/error-toastify";
import { handleSucess } from "../../components/notification/sucess-toastify";

const SignUp = async (userData: signuptype) => {
  const response = await fetch("http://localhost:5000/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userData.username,
      email: userData.email,
      password: userData.password,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    handleErrorToast(result.error);
    throw new Error(result.error);
  } else {
    handleSucess("User created successfully");
    return result; // Return the response if needed
  }
};

export default SignUp;
