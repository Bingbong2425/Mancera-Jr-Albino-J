import GetUserAll from "../../services/profile/get-user-all";
import SearchBoxAtom from "../../hooks/modal-atom/search-box-atom";
interface searchprops {
  input: string;
}

const SearchBox: React.FC<searchprops> = ({ input }) => {
  const { userProfile } = GetUserAll();
  const { searchBoxOpen } = SearchBoxAtom();
  const result = userProfile.filter((item) =>
    item.name?.toLowerCase().includes(input.toLowerCase())
  );

  const handleNavigate = (id: string | undefined) => {
    window.location.href = `/user/${id}`;
  };
  return (
    <div className="w-full">
      {searchBoxOpen && (
        <div className=" w-full flex items-center justify-center flex-col">
          {input !== "" ? (
            <div className=" bg-white w-[25%] shadow-md shadow-[#6a6a6a] rounded-md  overflow-auto  h-44 ">
              {result.length == 0 ? (
                <div className="p-3">
                  <h1 className="text-base font-semibold">User Not Found</h1>
                </div>
              ) : (
                <div>
                  {result.map((item) => (
                    <div
                      className="mt-5 px-3"
                      key={item.id}
                      onClick={() => handleNavigate(item.userid)}
                    >
                      <div className="flex items-center gap-3 cursor-pointer">
                        <div>
                          <img
                            src={item.profile}
                            className="w-[30px] h-[30px] rounded-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-base font-semibold">
                            {item.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
