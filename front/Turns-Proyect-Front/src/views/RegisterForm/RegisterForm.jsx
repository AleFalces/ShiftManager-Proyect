import { useState } from "react";
import styles from "./RegisterForm.module.css";
import validate from "../../utils/Validations";

let RegisterForm = () => {
  const [FormState, setFormstate] = useState({
    name: "",
    email: "",
    phone: 0,
    username: "",
    password: "",
  });

  let [Error, setError] = useState({
    name: "Name is required",
    email: "Email is required",
    phone: "Phone  is required",
    username: "Username is required",
    password: "Password is required",
  });

  const handlerInputs = (event) => {
    const { name, value } = event.target;
    setFormstate({
      ...FormState,
      [name]: value,
    });

    setError(validate(FormState));
    console.log(Error);
  };

  let handlerSubmit = (event) => {
    event.preventDefault();

    return alert("usuario registrado correctamente");
  };

  return (
    <div className={styles.contaierForm}>
      <h2> Register</h2>
      <form className={styles.inputsContainer} onSubmit={handlerSubmit}>
        <label>Name: </label>
        <input
          type="text"
          onChange={handlerInputs}
          name="name"
          value={FormState.name}
        />
        {Error.username && <p>Name is required</p>}
        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={handlerInputs}
          value={FormState.email}
        />
        {Error.email && <p>Email is required</p>}
        <label>Phone: </label>
        <input
          type="number"
          name="phone"
          onChange={handlerInputs}
          value={FormState.phone}
        />
        {Error.phone && <p>Phone number is required</p>}
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handlerInputs}
          value={FormState.username}
        />
        {Error.username && <p>username is required</p>}
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handlerInputs}
          value={FormState.password}
        />
        {Error.password && <p>Password is required</p>}
        <label>Confirm Password</label>
        <input type="password" name="Cpassword" onChange={handlerInputs} />
        {Error?.cpassword && <p>rechequea el password</p>}
        <button> Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
