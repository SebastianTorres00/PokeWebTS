import { useFetchRecipes, useHomeRecipes } from "./Hooks";
import "./styles.css";
// interface I
interface ISpritesPokem {
  back_default: string;
  back_shiny: string;
  front_default: string;
}
interface IListPokemones {
  name: string;
  id: string;
  sprites: ISpritesPokem;
}
const Home = () => {
  const { listPokemones, onChangeInput, loading } = useFetchRecipes();
  const { onPressGoDeteils } = useHomeRecipes();
  return (
    <>
      <div className="containerHome">
        <form className="formHome">
          <input
            className="inputSearch"
            onChange={(value) => onChangeInput(value.target.value)}
          />
        </form>
        <div className="backgroundHome">
          {loading ? (
            <h1>LOADING</h1>
          ) : (
            listPokemones.map((item: IListPokemones, index) => {
              return (
                <div
                  key={index}
                  style={{
                    background: "green",
                    borderRadius: 10,
                    margin: 5,
                    width: 250,
                    height: 250,
                    justifyContent: "center",
                  }}
                >
                  <h1 key={index}>{item?.name}</h1>
                  <img src={item.sprites.front_default} alt="" />
                  <button onClick={() => onPressGoDeteils(item?.id)}>
                    Detalles
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
