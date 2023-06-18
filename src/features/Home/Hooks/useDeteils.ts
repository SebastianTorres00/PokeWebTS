import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

interface IPokeMones {
  name: string;
  id: string;
}
interface IStateReduxValues {
  listPokemons: IPokeMones[];
  status: string;
}
interface IStateRedux {
  recipesReducer: IStateReduxValues;
}
const useDeteils = (id: string) => {
  const [pokeDeteils, setPokeDeteils] = useState<IPokeMones[]>([]); // Añade el tipo explícito IPokeMones[]
  const { listPokemons } = useSelector(
    (state: IStateRedux) => state.recipesReducer
  );

  useEffect(() => {
    const newListPokemons = listPokemons.filter(
      (item: IPokeMones) => item.id.toString() === id.toString()
    );
    setPokeDeteils(newListPokemons);
    console.log("===============> newListPokemons", newListPokemons);
  }, []);

  return { pokeDeteils };
};

export default useDeteils;
