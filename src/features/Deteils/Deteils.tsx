import { useParams } from "react-router-dom";
import { useDeteils } from "../Home/Hooks";

interface IParamsDeteils {
  id: string;
}
const Deteils = () => {
  const data = useParams();
  const { pokeDeteils } = useDeteils(data.id);
  console.log(pokeDeteils);

  return (
    <div>
      <h1>Detalles</h1>
    </div>
  );
};

export default Deteils;
