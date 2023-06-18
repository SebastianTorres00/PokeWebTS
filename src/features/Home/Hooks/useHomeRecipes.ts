import { useNavigate } from "react-router-dom";

const useHomeRecipes = () => {
  const navigate = useNavigate();
  const onPressGoDeteils = (value: number) => {
    navigate("detalles/" + value);
  };
  return { onPressGoDeteils };
};

export default useHomeRecipes;
