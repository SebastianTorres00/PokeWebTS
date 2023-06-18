import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./features/Home";
import { NavBar } from "./features/NavBar";
import { Deteils } from "./features/Deteils";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<Deteils />} />
      </Routes>
    </>
  );
}

export default App;
