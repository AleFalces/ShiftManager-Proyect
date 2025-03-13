import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserPanel.module.css";
import { deleteUser } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../../redux/userSlice";

function UserPanel() {
  const { name, phone, email, id } = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteUser = async () => {
    deleteUser(id);
    dispatch(userLogout({}));
    navigate("/");
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
