import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

interface IAbility {
  name: string;
}
interface Iabilities {
  ability: IAbility;
}

interface IPokeMones {
  name: string;
  id: string;
  abilities: Iabilities;
}
interface IStateReduxValues {
  listPokemons: IPokeMones;
  status: string;
}
interface IStateRedux {
  recipesReducer: IStateReduxValues;
}

interface IAbility {
  name: string;
}
interface Iabilities {
  ability: IAbility;
}

const useDetails = (id: string) => {
  const listAbilities = [];
  const [pokeDetails, setPokeDetails] = useState<IPokeMones>(); // Añade el tipo explícito IPokeMones[]
  const { listPokemons } = useSelector(
    (state: IStateRedux) => state.recipesReducer
  );
  useEffect(() => {
    const newListPokemons = listPokemons.filter(
      (item: IPokeMones) => item.id.toString() === id.toString()
    );
    setPokeDetails(newListPokemons[0]);
  }, []);

  const listOfAbilities = pokeDetails?.abilities?.map(
    (item: Iabilities, index: number) => {
      listAbilities.push(item.ability.name);
      const isMapFinish = pokeDetails?.abilities.length === index + 1;
      if (isMapFinish) {
        return listAbilities?.join("-");
      }
    }
  );

  return { pokeDetails, listOfAbilities };
};

export default useDetails;
