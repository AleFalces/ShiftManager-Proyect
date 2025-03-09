import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

let Navbar = () => {
  const userHaveAcount = true;
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/turns">
        <span>Turns</span>
      </Link>
      <Link to="/about">
        <span>About Us</span>
      </Link>

      {userHaveAcount === false ? (
        <Link to="/register">
          <span>Register</span>
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
