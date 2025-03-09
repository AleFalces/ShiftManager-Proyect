import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

let Navbar = () => {
  const userHaveAcount = false;
  return (
    <div className={styles.Navbar}>
      <Link to="/">Home</Link>
      <Link to="/turns">Turns</Link>
      <Link to="/about">About Us</Link>

      {userHaveAcount === false ? (
        <Link to="/register">Register</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
