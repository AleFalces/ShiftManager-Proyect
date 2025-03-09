import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import LoginForm from "./views/LoginForm/LoginForm";
import MyTurns from "./views/MyTurns/MyTurns";
import RegisterForm from "./views/RegisterForm/RegisterForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/turns"} element={<MyTurns />} />
        <Route path={"/register"} element={<RegisterForm />} />
        <Route path={"/login"} element={<LoginForm />} />
        <Route path={"/about"} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
