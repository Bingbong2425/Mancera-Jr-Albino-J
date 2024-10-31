const Header = () => {
  return (
    <div className="w-full py-3 px-3 transition-all duration-400 ease-in lg:py-5 lg:px-5 xl:bg-transparent max-xl:bg-white ">
      <div className="flex items-center gap-1 px-2 py-1">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            className="text-3xl text-[#00f518] transition-all duration-400 ease-in lg:text-4xl"
          >
            <path
              fill="currentColor"
              d="M27.8 27.7L17.5 3.1c-.3-.7-.9-1.1-1.6-1.1s-1.3.4-1.6 1.1L3 30h3.9l4.5-11.1l13.3 10.7c.5.4.9.6 1.4.6c1 0 1.9-.7 1.9-1.8c0-.2-.1-.4-.2-.7M15.9 7.5l6.7 16.4L12.5 16z"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-fredoka text-[#05f] font-semibold leading-5 transition-all duration-400 ease-in	lg:text-3xl">
            Santy's
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
