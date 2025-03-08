import styles from "./LoginForm.module.css";

let LoginForm = () => {
  return (
    <div className={styles.contaierForm}>
      <form className={styles.inputsContainer}>
        <h2> Login</h2>
        <label>Enter your Uame</label>
        <input type="text" name="username" />

        <label>Enter Your Password</label>
        <input type="text" name="password" />
      </form>
    </div>
  );
};

export default LoginForm;
