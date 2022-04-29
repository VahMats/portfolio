import './App.css';
import Portfolio from "./pages/Portfolio";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
