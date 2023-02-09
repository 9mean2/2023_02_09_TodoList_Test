import React, { useState } from "react";
import "./App.css";

const App = () => {
  // todolist : 할일 쪽 객체
  const [todoList, setTodoList] = useState([
    { id: 0, title: "시험 끝난 후에 다시 잠자기" },
  ]);

  //          value        state 변경
  const [todoInputTitle, setTodoInputTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTodoInputTitle(e.target.value);
  };

  const addBtnHandler = () => {
    const newObj = {
      id: Math.random(),
      title: todoInputTitle,
    };

    setTodoList([...todoList, newObj]);
  };

  return (
    <div>
      <div className="todolist__container">
        <div>
          <input value={todoInputTitle} onChange={titleChangeHandler} />
          <button onClick={addBtnHandler}>추가하기</button>
          <div className="h1">
            <h1>Todo List</h1>
          </div>
          <br />
        </div>
      </div>
      <div className="cardBox__container">
        {todoList.map((v, i) => {
          return (
            <div key={i} className="cardBox">
              <h1>{v.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
