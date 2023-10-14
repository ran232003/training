import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./List.css";
import ListItems from "./ListItems";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../store/taskSlice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ListHomepage = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    let id = Math.floor(Math.random() * 10000);
    dispatch(taskAction.addTask({ task: input, id, status: "todo" }));
  };
  const toDoLists = useSelector((state) => {
    return state.todoLists;
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mainTodoList">
        <Form className="input">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Task"
              style={{ height: "40px" }}
              value={input}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            onClick={handleSubmit}
            variant="primary"
            style={{ height: "40px", marginLeft: "10px" }}
          >
            Submit
          </Button>
        </Form>

        <div className="assignments">
          <ListItems
            list={toDoLists.todo}
            cssClass="topic"
            title="TODO"
            status="todo"
          />
          <ListItems
            list={toDoLists.inProgress}
            cssClass="inProgress topic"
            status="inProgress"
            title="IN PROGRESS"
          />
          <ListItems
            list={toDoLists.closed}
            cssClass="closed topic"
            title="CLOSED"
            status="closed"
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default ListHomepage;
