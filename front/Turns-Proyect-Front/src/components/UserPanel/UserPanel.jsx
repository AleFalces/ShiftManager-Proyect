import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserPanel.module.css";

function UserPanel() {
  const { name, phone, email } = useSelector((state) => state.users.user);

  return (
    <div className={styles.profielContainer}>
      <div>
        <h2>My Profile</h2>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <button>Cancel your Acount</button>
    </div>
  );
}

export default UserPanel;
