import styles from "./App.module.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import LoginForm from "./views/LoginForm/LoginForm";
import AvailableTurns from "./views/AvailableTurns/AvailableTurns";
import RegisterForm from "./views/RegisterForm/RegisterForm";
import { Route, Routes } from "react-router-dom";
import UserPanel from "./components/UserPanel/UserPanel";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import MyTurns from "./views/MyTurns/MyTurns";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turns" element={<AvailableTurns />} />
          <Route path="/myturns" element={<MyTurns />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/userPanel" element={<UserPanel />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
