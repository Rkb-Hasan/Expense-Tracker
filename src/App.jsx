import { Route, Routes } from "react-router-dom";
import AddEntry from "./pages/AddEntry";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Home />} path="/" exact />
        <Route element={<AddEntry />} path="/addentry" />
        <Route element={<Statistics />} path="/statistics" />
        <Route element={<Profile />} path="/me" />
      </Route>

      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
