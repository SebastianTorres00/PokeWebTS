import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./features/Home";
import { NavBar } from "./features/NavBar";
import { Details } from "./features/Details";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
