import adapterFetchPokemon from "../../../features/Home/adapters";
import { ERROR, FETCH, SUCCESS } from "../constants";

interface IPokemonAdapter {
  name: string;
  url: string;
}
const success = (data: IPokemonAdapter[]) => ({
  type: SUCCESS,
  payload: data,
});

const fetchPokemons = () => ({
  type: FETCH,
  payload: undefined,
});

const error = () => ({
  type: ERROR,
  payload: undefined,
});

const fetchListPokemons = () => async (dispatch: any) => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon";
    dispatch(fetchPokemons());
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    const responseData = await response.json();
    const responseAdapter: IPokemonAdapter[] = await adapterFetchPokemon(
      responseData.results,
    );

    dispatch(success(responseAdapter));
  } catch (e) {
    dispatch(error());
  }
};

export default fetchListPokemons;
