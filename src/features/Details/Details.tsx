import { useNavigate, useParams } from "react-router-dom";
import { useDetails } from "../Hooks";
import "./styles.css";

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}
export interface DreamWorld {
  front_default: string;
  front_female: null;
}
export interface Other {
  dream_world: DreamWorld;
  home: Home;
}
interface ISpritesPokem {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
}
interface IAbility {
  name: string;
}
interface Iabilities {
  ability: IAbility;
}
interface IPokemon {
  name: string;
  id: string;
  sprites: ISpritesPokem;
  height: string;
  weight: string;
  abilities: Iabilities[];
}
interface IPropsDetails {
  pokeDetails: IPokemon | undefined;
  listOfAbilities: string;
}

const Details = () => {
  const data = useParams();
  const navigate = useNavigate();
  const props: IPropsDetails = useDetails(data.id);
  const { listOfAbilities } = props;
  const listPokeDetails = props?.pokeDetails;
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="containerDetails">
      <div className="cardDetails ">
        <div className="cardDetailsImage">
          <img
            src={listPokeDetails?.sprites.other?.dream_world.front_default}
            alt={listPokeDetails?.name}
            className="detailsImage"
          />
        </div>
        <h1 className="namePokemonDetails" key={listPokeDetails?.id}>
          {listPokeDetails?.name.toUpperCase()}
        </h1>
        <p
          style={{
            color: "#21292c",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          Habilidades: {listOfAbilities}
        </p>
        <p
          style={{
            color: "#21292c",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          Peso: {listPokeDetails?.weight}lb
        </p>
        <p
          style={{
            color: "#21292c",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          Altura: {listPokeDetails?.height}"
        </p>
        <button className="goBackDetails" onClick={() => goBack()}>
          Volver Atras
        </button>
      </div>
    </div>
  );
};

export default Details;
