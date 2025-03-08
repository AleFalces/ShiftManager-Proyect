import styles from "./RegisterForm.module.css";

let RegisterForm = () => {
  return (
    <div className={styles.contaierForm}>
      <h2> Register</h2>
      <form className={styles.inputsContainer}>
        <label>Name: </label>
        <input type="text" name="name" />
        <label>Email: </label>
        <input type="email" name="name" />
        <label>Phone: </label>
        <input type="number" name="name" />
        <label>Usernamee</label>
        <input type="text" name="name" />
        <label>Password: </label>
        <input type="text" name="name" />
        <label>Confirm Password</label>
        <input type="text" name="name" />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
