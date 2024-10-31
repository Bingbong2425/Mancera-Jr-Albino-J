import { signintype } from "../../types/sign-in-type";
import { useForm, SubmitHandler } from "react-hook-form";
import SignInHook from "../../hooks/user/sign-in-hook";
import { Link } from "react-router-dom";
import Button from "../button/button";
import { useState } from "react";

const SignIn = () => {
  const { register, handleSubmit } = useForm<signintype>();
  const { handleLogin } = SignInHook();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit: SubmitHandler<signintype> = (data) => {
    handleLogin(data);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="relative">
        <div className="absolute top-[18px] z-20 px-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-2xl text-[#adb5bd]"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            {...register("username")}
            className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
            placeholder="Username"
          />
        </div>
      </div>

      <div className="relative mt-5">
        <div className="absolute top-[18px] z-20 px-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-2xl text-[#adb5bd]"
          >
            <path
              fill="currentColor"
              d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            {...register("password")}
            className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
        </div>

        <div className="absolute top-[18px] z-20 px-2  right-0">
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#adb5bd] cursor-pointer"
              onClick={handleShowPassword}
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#adb5bd]  cursor-pointer"
              onClick={handleShowPassword}
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
              />
            </svg>
          )}
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            name="fav_language"
            value="HTML"
            className=" rounded-2xl	"
          />
          <label htmlFor="remember" className="text-sm	text-[#adb5bd ]">
            Remember me
          </label>
        </div>
        <div>
          <Link to="/recover">
            {" "}
            <p className="text-sm font-semibold text-[#495057 ]	">
              Forgot your Password?
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full mt-7">
        <div className="text-center ">
          <Button
            onButtonClick={handleSubmit(onSubmit)}
            classname="font-bold text-white h-[60px] bg-[#343a40] w-full rounded-lg"
            buttonname="Login"
          />
        </div>

        <div className="mt-3">
          <p className="text-sm text-[#adb5bd]">
            Dont have account{" "}
            <Link to="/signup">
              <span className="text-[#1e74fd] font-bold">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
