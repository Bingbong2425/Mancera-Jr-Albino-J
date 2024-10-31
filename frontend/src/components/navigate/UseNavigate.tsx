import { useNavigate } from "react-router-dom";
const UseNavigate = () => {
  const navigate = useNavigate();
  const handleNavigate = (url?: string) => {
    navigate(`/${url}`);
  };
  return { handleNavigate };
};

export default UseNavigate;
