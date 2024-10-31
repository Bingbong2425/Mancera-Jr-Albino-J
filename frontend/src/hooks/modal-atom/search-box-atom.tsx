import { searchBox } from "../../state/search-box";
import { useAtom } from "jotai";
const SearchBoxAtom = () => {
  const [searchBoxOpen, setSearchBoxOpen] = useAtom(searchBox);
  const handleOpenSearchBox = () => {
    setSearchBoxOpen(true);
  };

  const handleCloseSearchBox = () => {
    setSearchBoxOpen(false);
  };

  return { handleOpenSearchBox, handleCloseSearchBox, searchBoxOpen };
};

export default SearchBoxAtom;
