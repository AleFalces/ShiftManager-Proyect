import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import logo from "../../assets/istockphoto-1196233488-612x612.jpg";
import useLogoutAlert from "../../utils/useLogoutAlert";

let Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { handleLogout } = useLogoutAlert();
  const location = useLocation();

  return (
    <nav>
      <div className={styles.Navbar}>
        <Link to="/">
          <img src={logo} alt="" className={styles.logo}></img>
        </Link>
        {location.pathname !== "/" && (
          <Link to="/">
            <a>Home</a>
          </Link>
        )}
        {location.pathname !== "/turns" && (
          <Link to="/turns">
            <a>Reserve an Turn</a>
          </Link>
        )}

        {user === true && location.pathname !== "/myturns" && (
          <Link to="/myturns">
            <a>My Turns</a>
          </Link>
        )}
        {location.pathname !== "/about" && (
          <Link to="/about">
            <a>About Us</a>
          </Link>
        )}

        {user === true ? (
          <div className={styles.dropdown} onClick={toggleDropdown}>
            <a className={styles.dropdownToggle}>User Options</a>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/userPanel">
                  <button>User Panel</button>
                </Link>

                <Link>
                  <button onClick={handleLogout}>LogOut</button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <a>Login</a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
