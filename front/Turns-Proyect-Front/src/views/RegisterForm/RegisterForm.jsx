import { useState } from "react";
import styles from "./RegisterForm.module.css";
import validate from "../../utils/Validations";
import { postCreateUser } from "../../services/userServices";
import useRegisterAlert from "../../utils/UseRegisterAlert";

let RegisterForm = () => {
  const [FormState, setFormstate] = useState({
    name: "",
    email: "",
    phone: 0,
    username: "",
    password: "",
    type: "user",
    Cpassword: "",
  });

  let [Error, setError] = useState({});
  let [showErrors, setShowErrors] = useState(false);
  const { handleRegister } = useRegisterAlert();

  const handlerInputs = (event) => {
    const { name, value } = event.target;
    setFormstate({
      ...FormState,
      [name]: value,
    });

    setError(validate(FormState));
  };

  let handlerSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(FormState);
    setError(validationErrors);
    setShowErrors(true);

    if (Object.keys(validationErrors).length === 0) {
      handleRegister(FormState);
    }
  };

  return (
    <div className={styles.contaierForm}>
      <h2>Register</h2>
      <form className={styles.inputsContainer} onSubmit={handlerSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handlerInputs}
          value={FormState.name}
        />
        {showErrors && Error.name && (
          <p className={styles.error}>{Error.name}</p>
        )}

        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={handlerInputs}
          value={FormState.email}
        />
        {showErrors && Error.email && (
          <p className={styles.error}>{Error.email}</p>
        )}

        <label>Phone: </label>
        <input
          type="text"
          name="phone"
          onChange={handlerInputs}
          value={FormState.phone}
        />
        {showErrors && Error.phone && (
          <p className={styles.error}>{Error.phone}</p>
        )}

        <label>Username: </label>
        <input
          type="text"
          name="username"
          onChange={handlerInputs}
          value={FormState.username}
        />
        {showErrors && Error.username && (
          <p className={styles.error}>{Error.username}</p>
        )}

        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handlerInputs}
          value={FormState.password}
        />
        {showErrors && Error.password && (
          <p className={styles.error}>{Error.password}</p>
        )}

        <label>Confirm Password: </label>
        <input
          type="password"
          name="Cpassword"
          onChange={handlerInputs}
          value={FormState.Cpassword}
        />
        {showErrors && Error.Cpassword && (
          <p className={styles.error}>{Error.Cpassword}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
