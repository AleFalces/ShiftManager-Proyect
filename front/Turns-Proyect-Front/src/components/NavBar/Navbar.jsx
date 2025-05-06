import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import logo from "../../assets/istockphoto-1196233488-612x612.jpg";
import useLogoutAlert from "../../utils/useLogoutAlert";

let Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { handleLogout } = useLogoutAlert();
  const location = useLocation();

  return (
    <nav>
      <div className={styles.Navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo}></img>
        </Link>

        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          {location.pathname !== "/" && <Link to="/">Home</Link>}
          {location.pathname !== "/turns" && (
            <Link to="/turns">Reserve an Turn</Link>
          )}

          {user === true && location.pathname !== "/myturns" && (
            <Link to="/myturns">My Turns</Link>
          )}
          {location.pathname !== "/about" && <Link to="/about">About Us</Link>}

          {user === true ? (
            <div className={styles.dropdown} onClick={toggleDropdown}>
              <span className={styles.dropdownToggle}>User Options</span>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link to="/userPanel">
                    <button>User Panel</button>
                  </Link>
                  <button onClick={handleLogout}>LogOut</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
