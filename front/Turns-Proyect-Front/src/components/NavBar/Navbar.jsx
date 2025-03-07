import styles from "./NavBar.module.css";

let Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <li>Home</li>
      <li>Turns</li>
      <li>About Us</li>
      <li>UserPanel</li>
    </div>
  );
};

export default Navbar;
