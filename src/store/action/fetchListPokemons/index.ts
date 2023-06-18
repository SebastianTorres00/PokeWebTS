import adapterFetchPokemon from "../../../features/Home/adapters";
import { ERROR, FETCH, IDLE, SUCCESS } from "../constants";
const success = (data) => ({
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

const init = () => ({
  type: IDLE,
  payload: undefined,
});

const fetchListPokemons = () => async (dispatch) => {
  try {
    console.log("-------> fetch");
    const url = "https://pokeapi.co/api/v2/pokemon";
    dispatch(fetchPokemons());
    // log
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    const responseData = await response.json();
    const responseAdapter = await adapterFetchPokemon(responseData.results);

    console.log("responseAdapter", responseAdapter);

    dispatch(success(responseAdapter));
  } catch (e) {
    dispatch(error());
    console.log("Error------>", e);
  }
};

export default fetchListPokemons;
