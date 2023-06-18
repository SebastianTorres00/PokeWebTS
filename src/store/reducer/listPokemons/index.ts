import { ERROR, FETCH, IDLE, SUCCESS } from "../../action/constants";

interface Iactionpayload {
  payload: string;
  type: string;
}
interface IinitialState {
  listPokemons: object[];
  status: string;
}
const initialState: IinitialState = {
  listPokemons: [],
  status: IDLE,
};

const recipesReducer = (state: IinitialState, action: Iactionpayload) => {
  switch (action.type) {
    case IDLE:
      return IDLE;
    case FETCH:
      return {
        ...initialState,
        status: FETCH,
      };
    case SUCCESS:
      return {
        listPokemons: action.payload,
        status: SUCCESS,
      };
    case ERROR:
      return {
        ...initialState,
        status: ERROR,
      };
    default:
      return initialState.listPokemons;
  }
};

export default recipesReducer;
