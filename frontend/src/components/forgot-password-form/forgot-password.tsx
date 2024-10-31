import { Toaster } from "react-hot-toast";
import { forgotpasswordtype } from "../../types/forgot-password-type";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import UpdatePasswordHook from "../../hooks/user/update-password-hook";

const ForgotPasswordForm = () => {
  const { id } = useParams<{ id: string | any }>();

  const { handleChangePassword, loading } = UpdatePasswordHook();

  const { register, handleSubmit } = useForm<forgotpasswordtype>();
  const onSubmit: SubmitHandler<forgotpasswordtype> = (data) => {
    if (data.confirmpassword == data.password) {
      handleChangePassword(data, id);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="relative ">
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
          />
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

      <div className="w-full mt-7">
        <div className="text-center ">
          <button className="font-bold text-white h-[60px] bg-[#343a40] w-full rounded-lg	">
            Change Password
          </button>
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

export default ForgotPasswordForm;
