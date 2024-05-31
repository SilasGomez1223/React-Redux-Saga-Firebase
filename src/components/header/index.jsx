import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Notes List</Link>
        </li>
        <li>
          <Link to="/add-new-note">Add New Notes</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
