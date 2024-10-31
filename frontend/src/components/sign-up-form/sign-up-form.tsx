import { signuptype } from "../../types/sign-up-type";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../button/button";
import SignUpHook from "../../hooks/user/sign-up-hook";
import { handleErrorToast } from "../notification/error-toastify";
import { useState } from "react";
const SignUp = () => {
  const { register, handleSubmit } = useForm<signuptype>();
  const { loading, handleSignUp } = SignUpHook();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const onSubmit: SubmitHandler<signuptype> = (data) => {
    if (data.confirmpassword == data.password) {
      handleSignUp(data);
    } else {
      handleErrorToast("Passwords and Confirm Password do NOT match");
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
            viewBox="0 0 20 20"
            className="text-2xl text-[#adb5bd]"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5zM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265zM18.64 7.292l-4.796 3.316l4.796 4.736zm-17.279.061v7.836l4.686-4.631zm16.956-3.532H1.698a.36.36 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199q.001-.2-.092-.292a.3.3 0 0 0-.234-.086"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            {...register("email")}
            className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
            placeholder="Your Email Address"
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
      <div className="relative mt-5">
        <div className="absolute top-[18px] z-20 px-2  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-2xl text-[#adb5bd]"
          >
            <rect width="24" height="24" fill="none" />
            <g fill="none">
              <path
                fill="currentColor"
                d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M11 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1M6 10V8q0-.511.083-1m11.728-.5A6.003 6.003 0 0 0 7.528 4"
              />
            </g>
          </svg>
        </div>
        <div className="relative">
          <input
            {...register("confirmpassword")}
            className="font-semibold w-full px-10 h-[60px] bg-[#f9f9f9]  border-2 border-[#eee]  placeholder-[#7a7b7b] rounded-md	"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
          />
        </div>

        <div className="absolute top-[18px] z-20 px-2  right-0">
          {showConfirmPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl text-[#adb5bd] cursor-pointer"
              onClick={handleShowConfirmPassword}
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
              onClick={handleShowConfirmPassword}
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

      <div className="w-full  mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="Accept"
            name="fav_language"
            value="HTML"
            className=" rounded-2xl	"
          />
          <label htmlFor="Accept" className="text-sm	text-[#adb5bd]">
            Accept Term and Conditions
          </label>
        </div>
      </div>
      <div className="w-full mt-2 py-5">
        <div className="text-center ">
          <Button
            onButtonClick={handleSubmit(onSubmit)}
            classname="font-bold text-white h-[60px] bg-[#343a40] w-full rounded-lg	"
            buttonname="Register"
          />
        </div>

        <div className="mt-3">
          <p className="text-sm text-[#adb5bd]">
            Already have account {""}
            <Link to="/">
              <span className="text-[#1e74fd] font-bold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
