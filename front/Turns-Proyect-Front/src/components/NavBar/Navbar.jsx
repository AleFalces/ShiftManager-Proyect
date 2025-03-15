import styles from "./NavBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import logo from "../../assets/istockphoto-1196233488-612x612.jpg";
import useLogoutAlert from "../../utils/useLogoutAlert";

let Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            <button>Home</button>
          </Link>
        )}
        {location.pathname !== "/turns" && (
          <Link to="/turns">
            <button>Turns</button>
          </Link>
        )}

        {user === true && location.pathname !== "/myturns" && (
          <Link to="/myturns">
            <button>My Turns</button>
          </Link>
        )}
        {location.pathname !== "/about" && (
          <Link to="/about">
            <button>About Us</button>
          </Link>
        )}

        {user === true ? (
          <div className={styles.dropdown} onClick={toggleDropdown}>
            <button className={styles.dropdownToggle}>User Options</button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/userPanel">
                  <button>User Panel</button>
                </Link>
                <Link to="/historial">
                  <button>Historial</button>
                </Link>
                <button onClick={handleLogout}>LogOut</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
