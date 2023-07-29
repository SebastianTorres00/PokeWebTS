import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Other } from "../Details/Details";

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

interface IStateReduxValues {
  listPokemons: IPokemon[];
  status: string;
}

interface IStateRedux {
  recipesReducer: IStateReduxValues;
}

const useDetails = (id: string | undefined) => {
  const [pokeDetails, setPokeDetails] = useState<IPokemon | undefined>();
  const { listPokemons } = useSelector(
    (state: IStateRedux) => state.recipesReducer,
  );
  useEffect(() => {
    const newListPokemons = listPokemons.filter(
      (item: IPokemon) => item.id.toString() === id?.toString(),
    );
    setPokeDetails(newListPokemons[0]);
  }, []);

  const listOfAbilities = pokeDetails?.abilities?.map(
    (item: Iabilities) => item.ability.name,
  );

  // Filtrar y unir las habilidades válidas en una cadena con el guion (-)
  const formattedListOfAbilities = listOfAbilities?.filter(Boolean).join("-");

  // Proporcionar un valor predeterminado (cadena vacía) si listOfAbilities es undefined
  const listOfAbilitiesString = formattedListOfAbilities || "";

  return { pokeDetails, listOfAbilities: listOfAbilitiesString };
};
export default useDetails;
