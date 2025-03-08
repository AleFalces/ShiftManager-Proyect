import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import LoginForm from "./views/LoginForm/LoginForm";
import MyTurns from "./views/MyTurns/MyTurns";
import RegisterForm from "./views/RegisterForm/RegisterForm";

function App() {
  let userHaveAcount = true;
  return (
    <>
      <Navbar />
      {userHaveAcount === false ? <LoginForm /> : <RegisterForm />}
      {/* <Home /> */}
      {/* <MyTurns /> */}
    </>
  );
}

export default App;
