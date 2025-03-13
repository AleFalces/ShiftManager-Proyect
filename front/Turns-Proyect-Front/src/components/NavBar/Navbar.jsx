import styles from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
let Navbar = () => {
  const user = useSelector((state) => state.users.isAuthenticated);

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
        <Link to="/userPanel">
          <span>User Panel</span>
        </Link>
      ) : (
        <Link to="/login">
          <span>Login</span>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
