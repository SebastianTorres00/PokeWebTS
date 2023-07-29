import { useNavigate } from "react-router-dom";

const useHomeRecipes = () => {
  const navigate = useNavigate();
  const onPressGoDetails = (value: number | string) => {
    navigate("detalles/" + value);
  };

  return { onPressGoDetails };
};

export default useHomeRecipes;
