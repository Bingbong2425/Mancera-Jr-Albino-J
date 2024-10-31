import { ButtonType } from "../../types/button-type";
const Button: React.FC<ButtonType> = ({
  buttonname,
  onButtonClick,
  classname,
}) => {
  return (
    <button className={`${classname}`} type="submit" onClick={onButtonClick}>
      {buttonname}
    </button>
  );
};

export default Button;
