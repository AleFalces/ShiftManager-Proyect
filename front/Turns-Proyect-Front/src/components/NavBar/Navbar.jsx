import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
let Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();

  return (
    <div className={styles.Navbar}>
      <img src="../" alt=""></img>

      {location.pathname !== "/" && (
        <Link to="/">
          <span>Home</span>
        </Link>
      )}
      {location.pathname !== "/turns" && (
        <Link to="/turns">
          <span>Turns</span>
        </Link>
      )}

      {user === true && (
        <Link to="/myturns">
          <span>My Turns</span>
        </Link>
      )}
      {location.pathname !== "/about" && (
        <Link to="/about">
          <span>About Us</span>
        </Link>
      )}

      {user === true ? (
        <div className={styles.dropdown} onClick={toggleDropdown}>
          <button className={styles.dropdownToggle}>User Panel</button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link to="/userPanel">
                <span>Panel de Usuario</span>
              </Link>
              <Link to="/historial">
                <span>Historial</span>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <span>Login</span>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
