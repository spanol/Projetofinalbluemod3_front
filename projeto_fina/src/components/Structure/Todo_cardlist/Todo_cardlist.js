import React, { useEffect, useState } from "react";
import "./Todo_cardlist.scss";
import Container from "@material-ui/core/Container";
import TodoCard from "../Todo_card/Todo_card";
import { Api } from "../../../api/api";

const TodoList = () => {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();
    setTodos(data);
  };

  return (
    <Container fixed>
      <div className="cards-area">
        {Todos.map((todo, index) => (
          <div key={todo._id} className="card-margin">
            <TodoCard todo={todo} key={todo._id} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TodoList;