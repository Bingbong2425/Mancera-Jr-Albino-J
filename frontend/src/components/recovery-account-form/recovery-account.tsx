import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { recoverytype } from "../../types/recover-type";
import SendEmailHook from "../../hooks/user/send-email-hook";
const Recovery = () => {
  const { handleSendEmail } = SendEmailHook();
  const { register, handleSubmit } = useForm<recoverytype>();
  const onSubmit: SubmitHandler<recoverytype> = (data) => {
    handleSendEmail(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <div className="relative">
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
            placeholder="Email"
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
            Submit
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

export default Recovery;
