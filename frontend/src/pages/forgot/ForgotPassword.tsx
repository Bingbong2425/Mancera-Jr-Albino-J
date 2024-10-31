import Header from "../../components/signin-signup-header/Header";
import { Link } from "react-router-dom";
import signupbg from "../../assets/signupbg.jpg";
import { Toaster } from "react-hot-toast";
import ForgotPasswordForm from "../../components/forgot-password-form/forgot-password";

const ForgotPassword = () => {
  return (
    <div className="w-full  h-screen  bg-[#f7f7f7]  ">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className="xl:hidden max-xl:block">
        <Header />
      </div>
      <div className="xl:flex xl:items-center xl:justify-center xl:gap-10 xl:w-full">
        <div className="xl:block w-[40%] relative  max-xl:hidden ">
          <div className="absolute z-20">
            <Header />
          </div>
          <div className="relative">
            <img src={signupbg} className="w-full h-screen" />
          </div>
        </div>

        <div className="xl:w-[60%] w-full px-7  flex items-center justify-center flex-col mt-20 ">
          <div className="md:w-[400px] sm:w-[350px]">
            <div className="w-full ">
              <h1 className="text-3xl font-bold leading-tight text-left">
                Change <br /> your password
              </h1>
            </div>

            <div>
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
