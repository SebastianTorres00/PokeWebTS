import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./features/Home";
import { NavBar } from "./features/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
