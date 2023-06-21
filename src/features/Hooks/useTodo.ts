import { useState } from "react";

const useTodo = () => {
  const [todo, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    console.log("test", inputValue);
    // const newTodo
    console.log("todo", todo);
    setTodos([...todo, { name: inputValue }]);
  };

  const onChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return { addTodo, onChange, todo };
};

export default useTodo;
