import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";

interface IPokeMones {
  name: string;
  id: string;
}
interface IStateReduxValues {
  listPokemons: IPokeMones;
  status: string;
}
interface IStateRedux {
  recipesReducer: IStateReduxValues;
}
const useDeteils = (id: string) => {
  const [pokeDeteils, setPokeDeteils] = useState<IPokeMones>(); // Añade el tipo explícito IPokeMones[]
  const { listPokemons } = useSelector(
    (state: IStateRedux) => state.recipesReducer
  );
  useEffect(() => {
    console.log("===============> 11111", listPokemons);
    const newListPokemons = listPokemons.filter(
      (item: IPokeMones) => item.id.toString() === id.toString()
    );
    console.log("===============> newListPokemons", newListPokemons);
    setPokeDeteils(newListPokemons[0]);
  }, []);
  return { pokeDeteils };
};

export default useDeteils;
