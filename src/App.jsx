import "./App.css";
import Chart from "./Chart";
import Compare from "./Compare";
import Goals from "./Goals";
import Graph from "./Graph";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Range from "./Range";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Header />
      <Goals />
      <Graph />
      <Compare />
      <Chart />
      <Range />
    </>
  );
}

export default App;
