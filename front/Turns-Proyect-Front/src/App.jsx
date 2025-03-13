import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import LoginForm from "./views/LoginForm/LoginForm";
import AvailableTurns from "./views/AvailableTurns/AvailableTurns";
import RegisterForm from "./views/RegisterForm/RegisterForm";
import { Route, Routes } from "react-router-dom";
import Myturns from "./views/MyTurns/MyTurns";
import UserPanel from "./components/UserPanel/UserPanel";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/turns"} element={<AvailableTurns />} />
        <Route path={"/myturns"} element={<Myturns />} />
        <Route path={"/register"} element={<RegisterForm />} />
        <Route path={"/login"} element={<LoginForm />} />
        <Route path={"/userPanel"} element={<UserPanel />} />
        <Route path={"/about"} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
