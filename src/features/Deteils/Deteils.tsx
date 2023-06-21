import { useNavigate, useParams } from "react-router-dom";
import { useDeteils } from "../Hooks";

interface ISpritesPokem {
  back_default: string;
  back_shiny: string;
  front_default: string;
}
interface IPokemons {
  name: string;
  id: string;
  sprites: ISpritesPokem;
}
interface IPropsDeteils {
  pokeDeteils: IPokemons;
}
const Deteils = () => {
  const data = useParams();
  const navigate = useNavigate();
  const props: IPropsDeteils = useDeteils(data.id);
  const pokeDeteils = props?.pokeDeteils;
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Detalles</h1>
      <h1 key={pokeDeteils?.id}>{pokeDeteils?.name}</h1>
      <img src={pokeDeteils?.sprites.front_default} alt={pokeDeteils?.name} />
      <button onClick={() => goBack()}>Volver Atras</button>
    </div>
  );
};

export default Deteils;
