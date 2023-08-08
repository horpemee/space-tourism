import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/home/Home";
import Destination from "./component/pages/destination/Destination";
import Crew from "./component/pages/crew/Crew";
import Technology from "./component/pages/technology/Technology";

function App() {
  return (
    <Routes>
      <Route path="/"  >
          <Route  index element = {<Home />}/>
          <Route path="destination" element={<Destination/>}/> 
          
          <Route path="crew" element={<Crew/>}/>
          <Route path="technology" element={<Technology/>}/>

      </Route>
    </Routes>
  );
}

export default App;
