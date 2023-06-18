
interface Iactionpayload {
    payload: string;
    value: string;
}
interface IinitialState {
    recipes: object[];
}
const initialState: IinitialState = {
    recipes: []
}


const recipesReducer = (action: Iactionpayload) => {
    switch (action?.payload) {
        case 'CREATE':
            return initialState.recipes
        default:
            return initialState.recipes
    }
};

export default recipesReducer