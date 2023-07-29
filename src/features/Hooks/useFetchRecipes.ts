import { useEffect, useState } from "react";
import { fetchListPokemons } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { Other } from "../Details/Details";
// interface I
interface ISpritesPokem {
  back_default: string;
  back_shiny: string;
  front_default: string;
  other?: Other;
}
interface IPokeMones {
  name: string;
  id: string;
  sprites: ISpritesPokem;
}
interface IStateReduxValues {
  listPokemons: IPokeMones[];
  status: string;
}
interface IStateRedux {
  recipesReducer: IStateReduxValues;
}
const useFetchRecipes = () => {
  const dispatch = useDispatch<ThunkDispatch<IStateRedux, any, AnyAction>>();
  const { listPokemons, status } = useSelector(
    (state: IStateRedux) => state.recipesReducer,
  );
  const [listPokemones, setListPokemones] = useState<IPokeMones[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    !listPokemons && dispatch(fetchListPokemons());
  }, []);

  useEffect(() => {
    if (status === "SUCCESS") {
      setLoading(false);
      setListPokemones(listPokemons);
      return;
    }
  }, [status]);

  // Logica input

  const onChangeInput = (value: string) => {
    setInputSearch(value);
  };
  useEffect(() => {
    if (inputSearch) {
      const newListPoke = listPokemons.filter((item: IPokeMones) =>
        item.name.includes(inputSearch),
      );
      setListPokemones(newListPoke);
      return;
    }
    setListPokemones(listPokemons);
  }, [inputSearch]);

  return { listPokemones, onChangeInput, loading };
};

export default useFetchRecipes;
