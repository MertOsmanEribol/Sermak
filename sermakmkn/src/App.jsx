import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Dikis from "./Dikis";
import Utu from "./Utu";
import Yedekparca from "./Yedekparca";
import Fabrika from "./Fabrika";
import Konum from "./Konum";
import Iletisim from "./Iletisim";
import Hakkimizda from "./Hakkimizda";
import Magazamiz from "./Magazamiz";


function App() {
  return (
    <div className="App  h-screen bg-gray-600">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Dikis" element={<Dikis />} />
        <Route path="/Utu" element={<Utu />} />
         <Route path="/Yedekparca" element={<Yedekparca />} />
                  <Route path="/Fabrika" element={<Fabrika />} />
   <Route path="/Konum" element={<Konum />} />
           <Route path="/Iletisim" element={<Iletisim />} />
           <Route path="/Hakkimizda" element={<Hakkimizda />} />
            <Route path="/Magazamiz" element={<Magazamiz/>} />
           
        </Routes>
      </Router>
    </div>
  );
}

export default App;
