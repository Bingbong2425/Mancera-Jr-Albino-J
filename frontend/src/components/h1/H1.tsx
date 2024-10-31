import { H1Props } from "../../types/h1-type";
const H1 = ({ classname, children }: H1Props) => {
  return (
    <div>
      <h1 className={classname}>{children}</h1>
    </div>
  );
};

export default H1;
