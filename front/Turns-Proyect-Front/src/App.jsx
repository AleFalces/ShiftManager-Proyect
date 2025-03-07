import "./App.css";
import Navbar from "./components/NavBar/Navnar";
import Home from "./views/Home/Home";
import MyTurns from "./views/MyTurns/MyTurns";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <MyTurns />
    </>
  );
}

export default App;
