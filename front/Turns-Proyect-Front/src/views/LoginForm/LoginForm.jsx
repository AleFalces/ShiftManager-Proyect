import { useState } from "react";
import styles from "./LoginForm.module.css";

let LoginForm = () => {
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });

  let handlerInput = (event) => {
    console.log(login);
    const { name, value } = event.target;
    setlogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };

  let handlerSubmit = (event) => {
    event.preventDefault();

    return alert("user");
  };
  return (
    <div className={styles.contaierForm}>
      <form className={styles.inputsContainer} onSubmit={handlerSubmit}>
        <h2> Login</h2>
        <label>Enter your Uame</label>
        <input
          type="text"
          name="username"
          onChange={handlerInput}
          value={login.username}
        />

        <label>Enter Your Password</label>
        <input
          type="text"
          name="password"
          onChange={handlerInput}
          value={login.password}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
