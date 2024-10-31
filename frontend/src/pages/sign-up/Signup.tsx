import Header from "../../components/signin-signup-header/Header";
import signupbg from "../../assets/signupbg.jpg";
import H1 from "../../components/h1/H1";
import SignUp from "../../components/sign-up-form/sign-up-form";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  return (
    <div className="w-full  h-auto  bg-[#f7f7f7] ">
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

        <div className="xl:w-[60%] w-full px-7  flex items-center justify-center flex-col mt-10 ">
          <div className="md:w-[400px] sm:w-[350px]">
            <div className="w-full ">
              <H1 classname="text-3xl font-bold leading-tight text-left">
                Create <br /> your account
              </H1>
            </div>

            <>
              <SignUp />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
