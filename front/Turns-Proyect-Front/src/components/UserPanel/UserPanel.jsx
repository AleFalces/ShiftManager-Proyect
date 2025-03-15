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
      <div>
        <h2>My Profile</h2>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <button onClick={handleDeleteUser}>Cancel your Acount</button>
    </div>
  );
}

export default UserPanel;
