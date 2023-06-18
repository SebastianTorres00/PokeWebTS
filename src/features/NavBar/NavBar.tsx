import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  console.log("Location pathname", pathname.includes("detalles"));
  const isDeteils = pathname.includes("detalles");
  return (
    !isDeteils && (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Nav Bar 1</h1>
        <br />
        <h1>Nav Bar 2</h1>
        <br />
        <h1>Nav Bar 3</h1>
      </div>
    )
  );
};

export default NavBar;
