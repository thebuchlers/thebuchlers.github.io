import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buchlers from "./pages/Buchlers";
import Player from "./pages/Player";
import LoginPage from "./pages/Login";
import AppLayout from "./layouts/AppLayout";
import "./App.css";

const App = () => {
  return (
    <Routes>
      {/* Public route (no layout) */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes wrapped in AppLayout */}
      <Route
        element={
            <AppLayout />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/keeping-up-with-the-buchlers" element={<Buchlers />} />
        <Route path="/watch" element={<Player />} />
      </Route>
    </Routes>
  );
};

export default App;
