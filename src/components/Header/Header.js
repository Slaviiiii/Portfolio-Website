import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header center">
      <h2>
        Slavi Karaslavov <span>DEV</span>
      </h2>
      <Navbar />
    </header>
  );
};

export default Header;
