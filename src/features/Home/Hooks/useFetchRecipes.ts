import { useEffect, useState } from "react";
import adapterFetchPokemon from "../adapters";

const useFetchRecipes = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const [listPokemones, setListPokemones] = useState([]);
  const [listPokemonesToSearch, setListPokemonesToSearch] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const fetchApi = async () => {
    try {
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      });
      const responseData = await response.json();
      const responseAdapter = await adapterFetchPokemon(responseData.results);
      setListPokemones(responseAdapter);
      setListPokemonesToSearch(responseAdapter);
    } catch (error) {
      console.log("*****INGRESO AL ERROR*****", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Logica input

  const onChangeInput = (value: string) => {
    setInputSearch(value);
  };
  useEffect(() => {
    console.log("inputSearch ---->", inputSearch);
    if (inputSearch) {
      console.log("Ingreso  ---->", inputSearch);
      const newListPoke = listPokemonesToSearch.filter((item) =>
        item.name.includes(inputSearch)
      );
      setListPokemones(newListPoke);
      return;
    }
    console.log("Salio ---->", inputSearch);
    setListPokemones(listPokemonesToSearch);
  }, [inputSearch]);

  return { listPokemones, onChangeInput };
};

export default useFetchRecipes;
