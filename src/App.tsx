import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buchlers from "./pages/Buchlers";
import Player from "./pages/Player";
import VerifyPage from "./pages/VerifyPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/keeping-up-with-the-buchlers"
        element={
          <ProtectedRoute>
            <Buchlers />
          </ProtectedRoute>
        }
      />

      {/* require Turnstile verification before /watch */}
      <Route
        path="/watch"
        element={
          <ProtectedRoute>
            <Player />
          </ProtectedRoute>
        }
      />

      <Route path="/verify" element={<VerifyPage />} />
    </Routes>
  );
};

export default App;
