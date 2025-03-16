import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserPanel.module.css";
import UsealertUser from "../../utils/UseAlertUser";

function UserPanel() {
  const { name, phone, email, id } = useSelector((state) => state.users.user);
  const alertUser = UsealertUser();

  const handleDeleteUser = () => {
    alertUser(id);
  };

  return (
    <div className={styles.profielContainer}>
      <div className={styles.dataContainer}>
        <h2 className={styles.title}>My Profile</h2>
        <p className={styles.text}> Name: {name}</p>
        <p className={styles.text}>Email: {email}</p>
        <p className={styles.text}>Phone Number: {phone}</p>
        <button onClick={handleDeleteUser}>Cancel your Acount</button>
      </div>
    </div>
  );
}

export default UserPanel;
