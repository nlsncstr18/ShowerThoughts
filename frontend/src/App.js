import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import background1 from "./assets/images/background1.jpg";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${background1})` }}
      className="overflow-y-scroll overflow-x-hidden h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
