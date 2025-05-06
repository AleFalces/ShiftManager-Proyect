import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  CalendarClock,
  UserCircle,
  Info,
  LogIn,
  LogOut,
  LayoutDashboard,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import logo from "../../assets/istockphoto-1196233488-612x612.jpg";
import useLogoutAlert from "../../utils/useLogoutAlert";

const Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { handleLogout } = useLogoutAlert();
  const location = useLocation();

  return (
    <nav>
      <div className={styles.Navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        {location.pathname !== "/" && (
          <Link to="/" className={styles.navItem}>
            <Home size={20} />
            Home
          </Link>
        )}

        {location.pathname !== "/turns" && (
          <Link to="/turns" className={styles.navItem}>
            <CalendarClock size={20} />
            Reserve a Turn
          </Link>
        )}

        {user && location.pathname !== "/myturns" && (
          <Link to="/myturns" className={styles.navItem}>
            <UserCircle size={20} />
            My Turns
          </Link>
        )}

        {location.pathname !== "/about" && (
          <Link to="/about" className={styles.navItem}>
            <Info size={20} />
            About Us
          </Link>
        )}

        {user ? (
          <div className={styles.dropdown}>
            <button
              onClick={toggleDropdown}
              className={`${styles.dropdownToggle} ${styles.navItem}`}
            >
              User Options{" "}
              {isDropdownOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/userPanel">
                  <button>
                    <LayoutDashboard size={16} />
                    User Panel
                  </button>
                </Link>
                <button onClick={handleLogout}>
                  <LogOut size={16} />
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className={styles.navItem}>
            <LogIn size={20} />
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
