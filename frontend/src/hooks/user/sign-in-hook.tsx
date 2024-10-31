import SignIn from "../../services/user/sign-in";
import { useEffect, useState } from "react";
import { signintype } from "../../types/sign-in-type";
import cookies from "../../utils/cookies/cookies";
import { socket } from "../../services/message/messages";
import { useNavigate } from "react-router-dom";
const SignInHook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (userData: signintype) => {
    setLoading(true);

    try {
      const { login, token, id, verify, username } = await SignIn(userData);

      if (verify == "notverify") {
        cookies.set("username", username);
        setTimeout(() => {
          navigate(`/verify/${id}`);
        }, 2000);
      } else {
        cookies.set("login", login);
        cookies.set("token", token);
        cookies.set("id", id);
        handleOnline(id);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleOnline = (id: string) => {
    socket.emit("online", {
      userid: id,
      socketid: null,
    });
    socket.emit("login-user", {
      socketid: null,
    });
  };

  return { handleLogin, loading };
};

export default SignInHook;
