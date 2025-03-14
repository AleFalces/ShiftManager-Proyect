import styles from "./NavBar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLogout } from "../../../redux/userSlice";
let Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();

  const handleLogout = () => {
    alert("logout sucesfuell");
    if (
      location.pathname === "/myturns" ||
      location.pathname === "/userPanel" ||
      location.pathname === "/historial"
    ) {
      navigate("/");
    }
    dispatch(userLogout());
  };

  return (
    <div className={styles.Navbar}>
      <img src="../" alt=""></img>

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

      {user === true && (
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
  );
};

export default Navbar;
