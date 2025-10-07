import { Information } from "../types/models";

const Header: React.FC<Information> = ({ title }) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default Header;