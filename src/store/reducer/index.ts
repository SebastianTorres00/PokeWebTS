import { combineReducers } from "redux";
import recipesReducer from "./listPokemons";

const rootReducer = combineReducers({ recipesReducer });

export { rootReducer };
