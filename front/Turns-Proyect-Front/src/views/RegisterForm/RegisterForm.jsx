import styles from "./RegisterForm.module.css";

let RegisterForm = () => {
  return (
    <div className={styles.contaierForm}>
      <form className={styles.inputsContainer}>
        <label>Name</label>
        <imput type="text" name="name" />
        <label>email</label>
        <imput type="email" name="name" />
        <label>Phone</label>
        <imput type="number" name="name" />
        <label>Usernamee</label>
        <imput type="text" name="name" />
        <label>Password</label>
        <imput type="text" name="name" />
        <label>Confirm Password</label>
        <imput type="text" name="name" />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
