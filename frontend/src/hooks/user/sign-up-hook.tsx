import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../../services/user/sign-up";
import { signuptype } from "../../types/sign-up-type";
import cookies from "../../utils/cookies/cookies";

const SignUpHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Correctly using useNavigate inside a hook

  const handleSignUp = async (userData: signuptype) => {
    setLoading(true);
    try {
      const { id, username } = await SignUp(userData);
      cookies.set("username", username);
      setTimeout(() => {
        navigate(`/verify/${id}`);
      }, 2000);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignUp, loading };
};

export default SignUpHook;
