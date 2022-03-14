import React from "react";

export const TodoContext = React.createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);
  const handleTodos = (todo) => {
    setTodos([...todos, todo]);
  };
  const ToggleTodos = (id) => {
    let afterToggle = todos.map((todo) =>
      todo.id === id
        ? { ...todo, Status: todo.Status === "true" ? "false" : "true" }
        : todo
    );
    setTodos(afterToggle);
  };
  const DeleteTodos = (id) => {
    let afterDelete = todos.filter((todo) => todo.id !== id);
    setTodos(afterDelete);
  };
  const ClearCompleted = () => {
    let pendingTasks = todos.filter((todo) => todo.Status !== "true");
    setTodos(pendingTasks);
  };
  return (
    <TodoContext.Provider
      value={{ todos, handleTodos, ToggleTodos, DeleteTodos, ClearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};
