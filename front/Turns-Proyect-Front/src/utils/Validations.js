const validate = (state) => {
  let errors = {};

  if (!state.name.trim()) errors.name = "Name is required";
  if (!state.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Invalid email format";
  }

  if (!state.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{9}$/.test(state.phone.toString())) {
    errors.phone = "Invalid phone number";
  }
  if (!state.username.trim()) errors.username = "Username is required";

  if (!state.password) {
    errors.password = "Password is required";
  } else if (state.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(state.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[^A-Za-z0-9]/.test(state.password)) {
    errors.password = "Password must contain at least one special character";
  }

  if (!state.Cpassword) {
    errors.Cpassword = "Please confirm your password";
  } else if (state.password !== state.Cpassword) {
    errors.Cpassword = "Passwords do not match";
  }

  return errors;
};
export default validate;
