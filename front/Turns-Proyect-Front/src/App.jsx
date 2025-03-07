import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import MyTurns from "./views/MyTurns/MyTurns";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <MyTurns />
    </>
  );
}

export default App;
