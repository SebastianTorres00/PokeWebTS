import { useFetchRecipes } from "./Hooks";
import "./styles.css";
// interface I
interface ISpritesPokem {
  back_default: string;
  back_shiny: string;
  front_default: string;
}
interface IListPokemones {
  name: string;
  sprites: ISpritesPokem;
}
const Home = () => {
  const { listPokemones, onChangeInput } = useFetchRecipes();
  console.log("listPokemones", listPokemones);
  return (
    <>
      <div className="containerHome">
        <form action="">
          <input
            className="inputSearch"
            onChange={(value) => onChangeInput(value.target.value)}
          />
        </form>
        <div className="backgroundHome">
          {listPokemones.map((item: IListPokemones, index) => {
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
