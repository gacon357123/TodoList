import React, { useState, useEffect } from "react";
import _ from "lodash";
import Addtodo from "./addtodo";
import Displaytodo from "./Displaytodo";

const Home = () => {
  const [todo, setTodo] = useState("");
  const initialState = JSON.parse(localStorage.getItem("listTodo")) || [];
  const [listTodo, setList] = useState([initialState]);

  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const ClickBtn = () => {
    if (!todo) {
      alert("todo name is not empty");
      return;
    }
    let todoID = randomIntFromInterval(1, 9999999999);
    let todoitem = {
      id: `todo${todoID}`,
      name: todo,
    };
    setList([...listTodo, todoitem]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    let copylistTodo = _.clone(listTodo);
    copylistTodo = copylistTodo.filter((item) => item.id !== id);
    setList(copylistTodo);
  };

  return (
    <div>
      <Addtodo todo={todo} ClickBtn={ClickBtn} setTodo={setTodo} />
      <Displaytodo listTodo={listTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
