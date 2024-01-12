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
    
    <div className="lg:flex lg:justify-evenly">

      <Navbar />

      <div className="lg:flex lg:flex-col lg:ml-10">
      <Profile />
      <Header />
      </div>

      <div className="lg:flex lg:flex-col lg:ml-12 lg:mr-12">
      <Goals />
      <Graph />

      <div className="lg:flex lg:items-center lg:justify-center"> 
      <Compare />
      <Chart />
      </div>

      </div>
      
      <div>
      <Range />

      </div>
      </div>

  );
}

export default App;
