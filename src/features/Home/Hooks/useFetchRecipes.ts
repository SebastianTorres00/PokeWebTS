import { useEffect, useState } from "react";
import { fetchListPokemons } from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
interface IPokeMones {
  name: string;
}
interface IStateReduxValues {
  listPokemons: IPokeMones[];
  status: string;
}
interface IStateRedux {
  recipesReducer: IStateReduxValues;
}
const useFetchRecipes = () => {
  const dispatch = useDispatch();
  const { listPokemons, status } = useSelector(
    (state: IStateRedux) => state.recipesReducer
  );
  const [listPokemones, setListPokemones] = useState<Object>([]);
  const [loading, setLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    dispatch(fetchListPokemons());
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
        item.name.includes(inputSearch)
      );
      setListPokemones(newListPoke);
      return;
    }
    setListPokemones(listPokemons);
  }, [inputSearch]);

  return { listPokemones, onChangeInput, loading };
};

export default useFetchRecipes;
