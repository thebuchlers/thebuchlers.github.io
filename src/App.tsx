import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buchlers from "./pages/Buchlers";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/keeping-up-with-the-buchlers" element={<Buchlers />} />
    </Routes>
  );
}

export default App;