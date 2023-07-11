import { useLocation } from "react-router-dom";
import imgNavBar from "../../assets/International_Pokémon_logo.svg.png";
const NavBar = () => {
  const { pathname } = useLocation();
  console.log("Location pathname", pathname.includes("detalles"));
  const isDetails = pathname.includes("detalles");
  return (
    !isDetails && (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={imgNavBar} alt="" style={{ width: 300, margin: 10 }} />
      </div>
    )
  );
};

export default NavBar;
