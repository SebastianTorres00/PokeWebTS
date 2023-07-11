import { useFetchRecipes, useHomeRecipes } from "../Hooks";
import "./styles.css";
import imgLoading from "../../assets/test2-fotor-bg-remover-20230704204433.png";
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
  const { onPressGoDetails } = useHomeRecipes();
  console.log("Pokemones", listPokemones);

  return (
    // <>
    <div className="containerHome">
      <form className="formHome">
        <input
          className="inputSearch"
          onChange={(value) => onChangeInput(value.target.value)}
        />
      </form>
      <div className="backgroundHome">
        {loading ? (
          <img src={imgLoading} alt="" className="loadingPokeBall" />
        ) : (
          listPokemones.map((item: IListPokemones, index: number) => {
            return (
              <div key={index} className="card">
                <div key={index} className="card-second">
                  <div>
                    <img
                      src={item?.sprites.other?.dream_world.front_default}
                      alt=""
                      style={{
                        height: "8vw",
                        margin: "auto",
                        display: "flex",
                      }}
                    />
                  </div>

                  <h1
                    key={index}
                    style={{
                      color: "#21292c",
                      fontFamily: "Montserrat",
                      fontSize: 25,
                      textAlign: "center",
                    }}
                  >
                    {item?.name[0].toUpperCase() + item?.name.substring(1)}
                  </h1>
                  <button
                    style={{
                      margin: "auto",
                      display: "flex",
                      bottom: "-25%",
                      position: "relative",
                    }}
                    onClick={() => onPressGoDetails(item?.id)}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
