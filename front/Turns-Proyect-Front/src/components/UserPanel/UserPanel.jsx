import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserPanel.module.css";
import UsealertUser from "../../utils/UseAlertUser";
import { User, Mail, Phone, Trash2 } from "lucide-react";

function UserPanel() {
  const { name, phone, email, id } = useSelector((state) => state.users.user);
  const alertUser = UsealertUser();

  const handleDeleteUser = () => {
    alertUser(id);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.dataContainer}>
        <h2 className={styles.title}>
          <User size={24} className={styles.icon} /> My Profile
        </h2>
        <p className={styles.text}>
          <User size={20} className={styles.icon} /> Name: {name}
        </p>
        <p className={styles.text}>
          <Mail size={20} className={styles.icon} /> Email: {email}
        </p>
        <p className={styles.text}>
          <Phone size={20} className={styles.icon} /> Phone Number: {phone}
        </p>
        <button className={styles.deleteButton} onClick={handleDeleteUser}>
          <Trash2 size={18} /> Cancel your Account
        </button>
      </div>
    </div>
  );
}

export default UserPanel;
